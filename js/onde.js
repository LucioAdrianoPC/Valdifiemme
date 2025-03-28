// JavaScript Document
function iniciar(){
	$('#am').hide();
	$('#ba').hide();
	$('#df').hide();
	$('#mg').hide();
	$('#pa').hide();
	$('#pe').hide();
	$('#pr').hide();
	$('#rj').hide();
	$('#sp').hide();
}

function am(){
	var apresenta = $('#am_ap').text();
	if (apresenta == '+'){
		$('#am_ap').text('-');
		$('#am').show();
	}else{
		$('#am_ap').text('+');
		$('#am').hide();
	}
	$('#ba').hide();
	$('#df').hide();
	$('#mg').hide();
	$('#pa').hide();
	$('#pe').hide();
	$('#pr').hide();
	$('#rj').hide();
	$('#sp').hide();
	$('#ba_ap').text('+');
	$('#df_ap').text('+');
	$('#mg_ap').text('+');
	$('#pa_ap').text('+');
	$('#pe_ap').text('+');
	$('#pr_ap').text('+');
	$('#rj_ap').text('+');
	$('#sp_ap').text('+');
}

function ba(){
	var apresenta = $('#ba_ap').text();
	if (apresenta == '+'){
		$('#ba_ap').text('-');
		$('#ba').show();
	}else{
		$('#ba_ap').text('+');
		$('#ba').hide();
	}
	$('#am').hide();
	$('#df').hide();
	$('#mg').hide();
	$('#pa').hide();
	$('#pe').hide();
	$('#pr').hide();
	$('#rj').hide();
	$('#sp').hide();
	$('#am_ap').text('+');
	$('#df_ap').text('+');
	$('#mg_ap').text('+');
	$('#pa_ap').text('+');
	$('#pe_ap').text('+');
	$('#pr_ap').text('+');
	$('#rj_ap').text('+');
	$('#sp_ap').text('+');
}

function df(){
	var apresenta = $('#df_ap').text();
	if (apresenta == '+'){
		$('#df_ap').text('-');
		$('#df').show();
	}else{
		$('#df_ap').text('+');
		$('#df').hide();
	}
	$('#am').hide();
	$('#ba').hide();
	$('#mg').hide();
	$('#pa').hide();
	$('#pe').hide();
	$('#pr').hide();
	$('#rj').hide();
	$('#sp').hide();
	$('#am_ap').text('+');
	$('#ba_ap').text('+');
	$('#mg_ap').text('+');
	$('#pa_ap').text('+');
	$('#pe_ap').text('+');
	$('#pr_ap').text('+');
	$('#rj_ap').text('+');
	$('#sp_ap').text('+');
}

function mg(){
	var apresenta = $('#mg_ap').text();
	if (apresenta == '+'){
		$('#mg_ap').text('-');
		$('#mg').show();
	}else{
		$('#mg_ap').text('+');
		$('#mg').hide();
	}
	$('#am').hide();
	$('#ba').hide();
	$('#df').hide();
	$('#pa').hide();
	$('#pe').hide();
	$('#pr').hide();
	$('#rj').hide();
	$('#sp').hide();
	$('#am_ap').text('+');
	$('#ba_ap').text('+');
	$('#df_ap').text('+');
	$('#pa_ap').text('+');
	$('#pe_ap').text('+');
	$('#pr_ap').text('+');
	$('#rj_ap').text('+');
	$('#sp_ap').text('+');
}

function pa(){
	var apresenta = $('#pa_ap').text();
	if (apresenta == '+'){
		$('#pa_ap').text('-');
		$('#pa').show();
	}else{
		$('#pa_ap').text('+');
		$('#pa').hide();
	}
	$('#am').hide();
	$('#ba').hide();
	$('#df').hide();
	$('#mg').hide();
	$('#pe').hide();
	$('#pr').hide();
	$('#rj').hide();
	$('#sp').hide();
	$('#am_ap').text('+');
	$('#ba_ap').text('+');
	$('#df_ap').text('+');
	$('#mg_ap').text('+');
	$('#pe_ap').text('+');
	$('#pr_ap').text('+');
	$('#rj_ap').text('+');
	$('#sp_ap').text('+');
}

function pe(){
	var apresenta = $('#pe_ap').text();
	if (apresenta == '+'){
		$('#pe_ap').text('-');
		$('#pe').show();
	}else{
		$('#pe_ap').text('+');
		$('#pe').hide();
	}
	$('#am').hide();
	$('#ba').hide();
	$('#df').hide();
	$('#mg').hide();
	$('#pa').hide();
	$('#pr').hide();
	$('#rj').hide();
	$('#sp').hide();
	$('#am_ap').text('+');
	$('#ba_ap').text('+');
	$('#df_ap').text('+');
	$('#mg_ap').text('+');
	$('#pa_ap').text('+');
	$('#pr_ap').text('+');
	$('#rj_ap').text('+');
	$('#sp_ap').text('+');
}

function pr(){
	var apresenta = $('#pr_ap').text();
	if (apresenta == '+'){
		$('#pr_ap').text('-');
		$('#pr').show();
	}else{
		$('#pr_ap').text('+');
		$('#pr').hide();
	}
	$('#am').hide();
	$('#ba').hide();
	$('#df').hide();
	$('#mg').hide();
	$('#pa').hide();
	$('#pe').hide();
	$('#rj').hide();
	$('#sp').hide();
	$('#am_ap').text('+');
	$('#ba_ap').text('+');
	$('#df_ap').text('+');
	$('#mg_ap').text('+');
	$('#pa_ap').text('+');
	$('#pe_ap').text('+');
	$('#rj_ap').text('+');
	$('#sp_ap').text('+');
}

function rj(){
	var apresenta = $('#rj_ap').text();
	if (apresenta == '+'){
		$('#rj_ap').text('-');
		$('#rj').show();
	}else{
		$('#rj_ap').text('+');
		$('#rj').hide();
	}
	$('#am').hide();
	$('#ba').hide();
	$('#df').hide();
	$('#mg').hide();
	$('#pa').hide();
	$('#pe').hide();
	$('#pr').hide();
	$('#sp').hide();
	$('#am_ap').text('+');
	$('#ba_ap').text('+');
	$('#df_ap').text('+');
	$('#mg_ap').text('+');
	$('#pa_ap').text('+');
	$('#pe_ap').text('+');
	$('#pr_ap').text('+');
	$('#sp_ap').text('+');
}

function sp(){
	var apresenta = $('#sp_ap').text();
	if (apresenta == '+'){
		$('#sp_ap').text('-');
		$('#sp').show();
	}else{
		$('#sp_ap').text('+');
		$('#sp').hide();
	}
	$('#am').hide();
	$('#ba').hide();
	$('#df').hide();
	$('#mg').hide();
	$('#pa').hide();
	$('#pe').hide();
	$('#pr').hide();
	$('#rj').hide();
	$('#am_ap').text('+');
	$('#ba_ap').text('+');
	$('#df_ap').text('+');
	$('#mg_ap').text('+');
	$('#pa_ap').text('+');
	$('#pe_ap').text('+');
	$('#pr_ap').text('+');
	$('#rj_ap').text('+');
}