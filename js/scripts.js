var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}
function showCountriesList(resp) {
	var result = ''
	countriesList.empty();
	resp.forEach(function(item) {
		result += '\
			<div class="main-container"> \
				<li class="name"> \
					<h1>' + item.name + '</h1>' + '\
					<img src= ' + item.flag + ' class="flag"> \
				</li> \
				<h2 class="background-information">Background Information : </h2> \
				<div class="countries-container"> \
					<li> \
						<span class="capitals">Capital</span> : <span class="part">' + item.capital + '</span> \
					</li> \
					<li> \
						<span class="capitals">Region</span> : <span class="part">' + item.region + '</span> \
					</li> \
					<li> \
						<span class="capitals">Land Area</span> : <span class="part"> ' + Math.round(item.area/1000) + ' sq.km</span> \
					</li> \
					<li> \
						<span class="capitals">Population</span> : <span class="part">' + Math.round(item.population/1000000).toFixed(2) + ' milion</span> \
					</li> \
		             <li> \
		                <span class="capitals">Language</span> : <span class="part">' + item.languages[0].nativeName + ', ' + item.languages[0].name + '</span \
		            </li> \
		            <li> \
		            	<span class="capitals">Currency</span> : <span class="part">' + item.currencies[0].code + '</span> \
		            </li> \
            	</div> \
            </div> \
		';
	});
	$(result).appendTo(countriesList);
}