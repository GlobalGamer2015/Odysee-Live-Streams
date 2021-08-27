const fetch = require('node-fetch');

module.exports = function(io) {
    const socket = io;

    function GetStreams() {
        fetch('https://api.live.odysee.com/v1/odysee/live/', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(api => api.json())
        .then(api => {
            const data = api.data;
            data.forEach(function(streams){
                const claimid = streams.claimId;
                fetch("https://chainquery.lbry.com/api/sql?query=SELECT%20*%20FROM%20claim%20WHERE%20publisher_id=%22" + claimid + "%22%20AND%20bid_state%3C%3E%22Spent%22%20AND%20claim_type=1%20AND%20source_hash%20IS%20NULL%20ORDER%20BY%20id%20DESC%20LIMIT%201", {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(stream => stream.json())
                .then(stream => {
                    if(stream.data.length >= 1) {
                        const created_at = stream.data[0].created_at;
                        const language = stream.data[0].language;
                        const title = stream.data[0].title;
                        const thumbnail = stream.data[0].thumbnail_url;
                        const channelLink = streams.claimData.channelLink;
                        const name = streams.claimData.name;

                        const streamer = {
                            created_at: created_at.replace('T', ' ').replace('Z', ''),
                            language: language,
                            title: title,
                            thumbnail: thumbnail,
                            channelLink: channelLink,
                            name: name,
                        };
                        socket.emit('stream', streamer)
                    }
                })
            })
        })
    }

    module.exports.GetStreams = GetStreams;
}