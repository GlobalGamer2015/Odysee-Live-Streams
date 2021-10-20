document.addEventListener('DOMContentLoaded', function(data) {
  // Set default data
  if(localStorage.getItem('timestamp_option') == null){localStorage.setItem('timestamp_option', false);}
  if(localStorage.getItem('live_option') == null){localStorage.setItem('live_option', false);}
  if(localStorage.getItem('channelLink_option') == null){localStorage.setItem('channelLink_option', true);} // True
  if(localStorage.getItem('canonicalUrl_option') == null){localStorage.setItem('canonicalUrl_option', false);}
  if(localStorage.getItem('_name_option') == null){localStorage.setItem('_name_option', false);}
  if(localStorage.getItem('shortUrl_option') == null){localStorage.setItem('shortUrl_option', false);}
  if(localStorage.getItem('claimId_option') == null){localStorage.setItem('claimId_option', false);}
  if(localStorage.getItem('viewCount_option') == null){localStorage.setItem('viewCount_option', true);} // True
  if(localStorage.getItem('audio_duration_option') == null){localStorage.setItem('audio_duration_option', false);}
  if(localStorage.getItem('author_option') == null){localStorage.setItem('author_option', false);}
  if(localStorage.getItem('bid_state_option') == null){localStorage.setItem('bid_state_option', false);}
  if(localStorage.getItem('certificate_option') == null){localStorage.setItem('certificate_option', false);}
  if(localStorage.getItem('city_option') == null){localStorage.setItem('city_option', false);}
  if(localStorage.getItem('claim_address_option') == null){localStorage.setItem('claim_address_option', false);}
  if(localStorage.getItem('claim_id_option') == null){localStorage.setItem('claim_id_option', false);}
  if(localStorage.getItem('claim_id_list_option') == null){localStorage.setItem('claim_id_list_option', false);}
  if(localStorage.getItem('claim_reference_option') == null){localStorage.setItem('claim_reference_option', false);}
  if(localStorage.getItem('claim_type_option') == null){localStorage.setItem('claim_type_option', false);}
  if(localStorage.getItem('code_option') == null){localStorage.setItem('code_option', false);}
  if(localStorage.getItem('content_type_option') == null){localStorage.setItem('content_type_option', false);}
  if(localStorage.getItem('country_option') == null){localStorage.setItem('country_option', false);}
  if(localStorage.getItem('created_at_option') == null){localStorage.setItem('created_at_option', false);}
  if(localStorage.getItem('description_option') == null){localStorage.setItem('description_option', false);}
  if(localStorage.getItem('duration_option') == null){localStorage.setItem('duration_option', false);}
  if(localStorage.getItem('effective_amount_option') == null){localStorage.setItem('effective_amount_option', false);}
  if(localStorage.getItem('email_option') == null){localStorage.setItem('email_option', false);}
  if(localStorage.getItem('fee_option') == null){localStorage.setItem('fee_option', false);}
  if(localStorage.getItem('fee_address_option') == null){localStorage.setItem('fee_address_option', false);}
  if(localStorage.getItem('fee_currency_option') == null){localStorage.setItem('fee_currency_option', false);}
  if(localStorage.getItem('frame_height_option') == null){localStorage.setItem('frame_height_option', false);}
  if(localStorage.getItem('frame_width_option') == null){localStorage.setItem('frame_width_option', false);}
  if(localStorage.getItem('has_claim_list_option') == null){localStorage.setItem('has_claim_list_option', false);}
  if(localStorage.getItem('height_option') == null){localStorage.setItem('height_option', false);}
  if(localStorage.getItem('id_option') == null){localStorage.setItem('id_option', false);}
  if(localStorage.getItem('is_cert_processed_option') == null){localStorage.setItem('is_cert_processed_option', false);}
  if(localStorage.getItem('is_cert_valid_option') == null){localStorage.setItem('is_cert_valid_option', false);}
  if(localStorage.getItem('is_filtered_option') == null){localStorage.setItem('is_filtered_option', true);} // True
  if(localStorage.getItem('is_nsfw_option') == null){localStorage.setItem('is_nsfw_option', true);} // True
  if(localStorage.getItem('language_option') == null){localStorage.setItem('language_option', true);} // True
  if(localStorage.getItem('latitude_option') == null){localStorage.setItem('latitude_option', false);}
  if(localStorage.getItem('license_option') == null){localStorage.setItem('license_option', false);}
  if(localStorage.getItem('license_url_option') == null){localStorage.setItem('license_url_option', false);}
  if(localStorage.getItem('list_type_option') == null){localStorage.setItem('list_type_option', false);}
  if(localStorage.getItem('longitude_option') == null){localStorage.setItem('longitude_option', false);}
  if(localStorage.getItem('modified_at_option') == null){localStorage.setItem('modified_at_option', false);}
  if(localStorage.getItem('stream_name_option') == null){localStorage.setItem('stream_name_option', true);} // True
  if(localStorage.getItem('os_option') == null){localStorage.setItem('os_option', false);}
  if(localStorage.getItem('preview_option') == null){localStorage.setItem('preview_option', false);}
  if(localStorage.getItem('publisher_id_option') == null){localStorage.setItem('publisher_id_option', false);}
  if(localStorage.getItem('publisher_sig_option') == null){localStorage.setItem('publisher_sig_option', false);}
  if(localStorage.getItem('release_time_option') == null){localStorage.setItem('release_time_option', false);}
  if(localStorage.getItem('sd_hash_option') == null){localStorage.setItem('sd_hash_option', false);}
  if(localStorage.getItem('source_hash_option') == null){localStorage.setItem('source_hash_option', false);}
  if(localStorage.getItem('source_media_type_option') == null){localStorage.setItem('source_media_type_option', false);}
  if(localStorage.getItem('source_name_option') == null){localStorage.setItem('source_name_option', false);}
  if(localStorage.getItem('source_size_option') == null){localStorage.setItem('source_size_option', false);}
  if(localStorage.getItem('source_url_option') == null){localStorage.setItem('source_url_option', false);}
  if(localStorage.getItem('state_option') == null){localStorage.setItem('state_option', false);}
  if(localStorage.getItem('thumbnail_url_option') == null){localStorage.setItem('thumbnail_url_option', false);}
  if(localStorage.getItem('title_option') == null){localStorage.setItem('title_option', true);} // True
  if(localStorage.getItem('transaction_hash_id_option') == null){localStorage.setItem('transaction_hash_id_option', false);}
  if(localStorage.getItem('transaction_hash_update_option') == null){localStorage.setItem('transaction_hash_update_option', false);}
  if(localStorage.getItem('transaction_time_option') == null){localStorage.setItem('transaction_time_option', false);}
  if(localStorage.getItem('type_option') == null){localStorage.setItem('type_option', false);}
  if(localStorage.getItem('valid_at_height_option') == null){localStorage.setItem('valid_at_height_option', false);}
  if(localStorage.getItem('version_option') == null){localStorage.setItem('version_option', false);}
  if(localStorage.getItem('vout_option') == null){localStorage.setItem('vout_option', false);}
  if(localStorage.getItem('vout_update_option') == null){localStorage.setItem('vout_update_option', false);}
  if(localStorage.getItem('website_url_option') == null){localStorage.setItem('website_url_option', false);}

	// Get current page
	const current_page = window.location.href;

  // Get data
  if(localStorage.getItem('timestamp_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('timestamp').checked = true;
		}
	}
  if(localStorage.getItem('timestamp_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('timestamp').checked = false;
		}
	}
  
  if(localStorage.getItem('live_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('live').checked = true;
		}
	}
  if(localStorage.getItem('live_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('live').checked = false;
		}
	}
  
  if(localStorage.getItem('channelLink_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('channelLink').checked = true;
		}
	}
  if(localStorage.getItem('channelLink_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('channelLink').checked = false;
		}
	}

  if(localStorage.getItem('canonicalUrl_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('canonicalUrl').checked = true;
		}
	}
  if(localStorage.getItem('canonicalUrl_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('canonicalUrl').checked = false;
		}
	}

  if(localStorage.getItem('_name_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('_name').checked = true;
		}
	}
  if(localStorage.getItem('_name_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('_name').checked = false;
		}
	}

  if(localStorage.getItem('shortUrl_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('shortUrl').checked = true;
		}
	}
  if(localStorage.getItem('shortUrl_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('shortUrl').checked = false;
		}
	}

  if(localStorage.getItem('claimId_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('claimId').checked = true;
		}
	}
  if(localStorage.getItem('claimId_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('claimId').checked = false;
		}
	}

  if(localStorage.getItem('viewCount_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('viewCount').checked = true;
		}
	}
  if(localStorage.getItem('viewCount_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('viewCount').checked = false;
		}
	}

  if(localStorage.getItem('audio_duration_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('audio_duration').checked = true;
		}
	}
  if(localStorage.getItem('audio_duration_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('audio_duration').checked = false;
		}
	}

  if(localStorage.getItem('author_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('author').checked = true;
		}
	}
  if(localStorage.getItem('author_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('author').checked = false;
		}
	}

  if(localStorage.getItem('bid_state_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('bid_state').checked = true;
		}
	}
  if(localStorage.getItem('bid_state_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('bid_state').checked = false;
		}
	}

  if(localStorage.getItem('certificate_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('certificate').checked = true;
		}
	}
  if(localStorage.getItem('certificate_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('certificate').checked = false;
		}
	}

  if(localStorage.getItem('city_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('city').checked = true;
		}
	}
  if(localStorage.getItem('city_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('city').checked = false;
		}
	}

  if(localStorage.getItem('claim_address_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('claim_address').checked = true;
		}
	}
  if(localStorage.getItem('claim_address_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('claim_address').checked = false;
		}
	}

  if(localStorage.getItem('claim_id_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('claim_id').checked = true;
		}
	}
  if(localStorage.getItem('claim_id_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('claim_id').checked = false;
		}
	}

  if(localStorage.getItem('claim_id_list_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('claim_id_list').checked = true;
		}
	}
  if(localStorage.getItem('claim_id_list_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('claim_id_list').checked = false;
		}
	}

  if(localStorage.getItem('claim_reference_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('claim_reference').checked = true;
		}
	}
  if(localStorage.getItem('claim_reference_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('claim_reference').checked = false;
		}
	}

  if(localStorage.getItem('claim_type_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('claim_type').checked = true;
		}
	}
  if(localStorage.getItem('claim_type_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('claim_type').checked = false;
		}
	}

  if(localStorage.getItem('code_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('code').checked = true;
		}
	}
  if(localStorage.getItem('code_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('code').checked = false;
		}
	}

  if(localStorage.getItem('content_type_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('content_type').checked = true;
		}
	}
  if(localStorage.getItem('content_type_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('content_type').checked = false;
		}
	}

  if(localStorage.getItem('country_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('country').checked = true;
		}
	}
  if(localStorage.getItem('country_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('country').checked = false;
		}
	}

  if(localStorage.getItem('created_at_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('created_at').checked = true;
		}
	}
  if(localStorage.getItem('created_at_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('created_at').checked = false;
		}
	}

  if(localStorage.getItem('description_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('description').checked = true;
		}
	}
  if(localStorage.getItem('description_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('description').checked = false;
		}
	}

  if(localStorage.getItem('duration_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('duration').checked = true;
		}
	}
  if(localStorage.getItem('duration_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('duration').checked = false;
		}
	}

  if(localStorage.getItem('duration_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('duration').checked = true;
		}
	}
  if(localStorage.getItem('duration_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('duration').checked = false;
		}
	}

  if(localStorage.getItem('effective_amount_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('effective_amount').checked = true;
		}
	}
  if(localStorage.getItem('effective_amount_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('effective_amount').checked = false;
		}
	}

  if(localStorage.getItem('email_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('email').checked = true;
		}
	}
  if(localStorage.getItem('email_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('email').checked = false;
		}
	}

  if(localStorage.getItem('fee_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('fee').checked = true;
		}
	}
  if(localStorage.getItem('fee_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('fee').checked = false;
		}
	}

  if(localStorage.getItem('fee_address_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('fee_address').checked = true;
		}
	}
  if(localStorage.getItem('fee_address_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('fee_address').checked = false;
		}
	}

  if(localStorage.getItem('fee_currency_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('fee_currency').checked = true;
		}
	}
  if(localStorage.getItem('fee_currency_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('fee_currency').checked = false;
		}
	}

  if(localStorage.getItem('frame_height_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('frame_height').checked = true;
		}
	}
  if(localStorage.getItem('frame_height_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('frame_height').checked = false;
		}
	}

  if(localStorage.getItem('frame_width_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('frame_width').checked = true;
		}
	}
  if(localStorage.getItem('frame_width_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('frame_width').checked = false;
		}
	}

  if(localStorage.getItem('has_claim_list_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('has_claim_list').checked = true;
		}
	}
  if(localStorage.getItem('has_claim_list_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('has_claim_list').checked = false;
		}
	}

  if(localStorage.getItem('height_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('height').checked = true;
		}
	}
  if(localStorage.getItem('height_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('height').checked = false;
		}
	}

  if(localStorage.getItem('id_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('id').checked = true;
		}
	}
  if(localStorage.getItem('id_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('id').checked = false;
		}
	}

  if(localStorage.getItem('is_cert_processed_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('is_cert_processed').checked = true;
		}
	}
  if(localStorage.getItem('is_cert_processed_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('is_cert_processed').checked = false;
		}
	}

  if(localStorage.getItem('is_cert_valid_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('is_cert_valid').checked = true;
		}
	}
  if(localStorage.getItem('is_cert_valid_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('is_cert_valid').checked = false;
		}
	}

  if(localStorage.getItem('is_filtered_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('is_filtered').checked = true;
		}
	}
  if(localStorage.getItem('is_filtered_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('is_filtered').checked = false;
		}
	}

  if(localStorage.getItem('is_nsfw_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('is_nsfw').checked = true;
		}
	}
  if(localStorage.getItem('is_nsfw_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('is_nsfw').checked = false;
		}
	}

  if(localStorage.getItem('language_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('language').checked = true;
		}
	}
  if(localStorage.getItem('language_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('language').checked = false;
		}
	}

  if(localStorage.getItem('latitude_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('latitude').checked = true;
		}
	}
  if(localStorage.getItem('latitude_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('latitude').checked = false;
		}
	}

  if(localStorage.getItem('license_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('license').checked = true;
		}
	}
  if(localStorage.getItem('license_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('license').checked = false;
		}
	}

  if(localStorage.getItem('license_url_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('license_url').checked = true;
		}
	}
  if(localStorage.getItem('license_url_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('license_url').checked = false;
		}
	}

  if(localStorage.getItem('list_type_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('list_type').checked = true;
		}
	}
  if(localStorage.getItem('list_type_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('list_type').checked = false;
		}
	}

  if(localStorage.getItem('longitude_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('longitude').checked = true;
		}
	}
  if(localStorage.getItem('longitude_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('longitude').checked = false;
		}
	}

  if(localStorage.getItem('modified_at_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('modified_at').checked = true;
		}
	}
  if(localStorage.getItem('modified_at_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('modified_at').checked = false;
		}
	}

  if(localStorage.getItem('stream_name_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('stream_name').checked = true;
		}
	}
  if(localStorage.getItem('stream_name_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('stream_name').checked = false;
		}
	}

  if(localStorage.getItem('os_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('os').checked = true;
		}
	}
  if(localStorage.getItem('os_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('os').checked = false;
		}
	}

  if(localStorage.getItem('preview_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('preview').checked = true;
		}
	}
  if(localStorage.getItem('preview_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('preview').checked = false;
		}
	}

  if(localStorage.getItem('publisher_id_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('publisher_id').checked = true;
		}
	}
  if(localStorage.getItem('publisher_id_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('publisher_id').checked = false;
		}
	}

  if(localStorage.getItem('publisher_sig_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('publisher_sig').checked = true;
		}
	}
  if(localStorage.getItem('publisher_sig_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('publisher_sig').checked = false;
		}
	}

  if(localStorage.getItem('release_time_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('release_time').checked = true;
		}
	}
  if(localStorage.getItem('release_time_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('release_time').checked = false;
		}
	}

  if(localStorage.getItem('sd_hash_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('sd_hash').checked = true;
		}
	}
  if(localStorage.getItem('sd_hash_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('sd_hash').checked = false;
		}
	}

  if(localStorage.getItem('source_hash_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('source_hash').checked = true;
		}
	}
  if(localStorage.getItem('source_hash_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('source_hash').checked = false;
		}
	}

  if(localStorage.getItem('source_media_type_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('source_media_type').checked = true;
		}
	}
  if(localStorage.getItem('source_media_type_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('source_media_type').checked = false;
		}
	}

  if(localStorage.getItem('source_name_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('source_name').checked = true;
		}
	}
  if(localStorage.getItem('source_name_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('source_name').checked = false;
		}
	}

  if(localStorage.getItem('source_size_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('source_size').checked = true;
		}
	}
  if(localStorage.getItem('source_size_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('source_size').checked = false;
		}
	}

  if(localStorage.getItem('source_url_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('source_url').checked = true;
		}
	}
  if(localStorage.getItem('source_url_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('source_url').checked = false;
		}
	}

  if(localStorage.getItem('state_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('state').checked = true;
		}
	}
  if(localStorage.getItem('state_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('state').checked = false;
		}
	}

  if(localStorage.getItem('thumbnail_url_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('thumbnail_url').checked = true;
		}
	}
  if(localStorage.getItem('thumbnail_url_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('thumbnail_url').checked = false;
		}
	}

  if(localStorage.getItem('title_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('title').checked = true;
		}
	}
  if(localStorage.getItem('title_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('title').checked = false;
		}
	}

  if(localStorage.getItem('transaction_hash_id_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('transaction_hash_id').checked = true;
		}
	}
  if(localStorage.getItem('transaction_hash_id_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('transaction_hash_id').checked = false;
		}
	}

  if(localStorage.getItem('transaction_hash_update_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('transaction_hash_update').checked = true;
		}
	}
  if(localStorage.getItem('transaction_hash_update_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('transaction_hash_update').checked = false;
		}
	}

  if(localStorage.getItem('transaction_time_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('transaction_time').checked = true;
		}
	}
  if(localStorage.getItem('transaction_time_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('transaction_time').checked = false;
		}
	}

  if(localStorage.getItem('type_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('type').checked = true;
		}
	}
  if(localStorage.getItem('type_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('type').checked = false;
		}
	}

	if(localStorage.getItem('valid_at_height_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('valid_at_height').checked = true;
		}
	}
	if(localStorage.getItem('valid_at_height_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('valid_at_height').checked = false;
		}
	}

	if(localStorage.getItem('version_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('version').checked = true;
		}
	}
	if(localStorage.getItem('version_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('version').checked = false;
		}
	}

	if(localStorage.getItem('vout_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('vout').checked = true;
		}
	}
	if(localStorage.getItem('vout_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('vout').checked = false;
		}
	}

	if(localStorage.getItem('vout_update_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('vout_update').checked = true;
		}
	}
	if(localStorage.getItem('vout_update_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('vout_update').checked = false;
		}
	}

	if(localStorage.getItem('website_url_option') === 'true') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('website_url').checked = true;
		}
	}
	if(localStorage.getItem('website_url_option') === 'false') {
		if(current_page.includes('streamers_settings')) {
			document.getElementById('website_url').checked = false;
		}
	}
});
