let url = 'https://restcountries.eu/rest/v2/name/';
let countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	let countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}
function showCountriesList(resp) {
	let result = ''
	countriesList.empty();
	resp.forEach( (item) => {
		result += `
				<li class="name">
					<h1>` + item.name + `</h1>` + `
					<img src= ` + item.flag + ` class="flag">
					<h2 class="background-information"> Background Information : </h2>
					<span class="countries-container">
					<ul class="countries-container">
						<li>
							<span class="capitals">Capital</span> : <span class="part">` + item.capital + `</span>
						</li>
						<li>
							<span class="capitals"> Region </span> : <span class="part">` + item.region + `</span>
						</li>
						<li>
							<span class="capitals">Land Area</span> : <span class="part"> ` + Math.round(item.area/1000) + ` sq.km</span>
						</li>
						<li>
							<span class="capitals">Population</span> : <span class="part">` + Math.round(item.population/1000000).toFixed(2) + ` milion</span>
						</li>
			             <li>
			                <span class="capitals">Language</span> : <span class="part">` + item.languages[0].nativeName + `, ` + item.languages[0].name + `</span>
			            </li>
			            <li>
			            	<span class="capitals">Currency</span> : <span class="part">` + item.currencies[0].code + `</span>
			            </li>
	            	</ul>
            	</li>`;
	});
	$(result).appendTo(countriesList);
}