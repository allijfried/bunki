$('#answers').css('display', 'none');

var answers = {
	"city": APICityName($('#location').text()),
	"userName": $('#name').text(),
	"userEmail": $('#email').text(),
	"shops": t_or_f('#shops'),
	"nightlife": t_or_f('#nightlife')
};



parsePost();
getAPIData(answers.city);

function parsePost() {

	Parse.initialize("__KEY1__", "__KEY2__");

	var UserInfo = Parse.Object.extend("UserInfo");
	var UserInfo = new UserInfo();

	// Post information to parse
	UserInfo.set("desiredCity", answers.city);
	UserInfo.set("userName", answers.userName);
	UserInfo.set("userEmail", answers.userEmail);
	UserInfo.set("shops", answers.shops);
	UserInfo.set("nightlife", answers.nightlife);
	UserInfo.set("priceRange"), answers.priceRange);

	UserInfo.save(null, {
	  success: function(UserInfo) {
	    // Execute any logic that should take place after the object is saved.
	    alert('New object created with objectId: ' + UserInfo.id);
	  },
	  error: function(UserInfo, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    alert('Failed to create new object, with error code: ' + error.message);
	  }
	});
}

function APICityName(city) {
	cities = {
		"new_york" : "NYC",
		"austin": "ATX",
		"san_fran": "SF",
		"la": "LA",
		"philly": "PHI",
		"san_diego": "SD"
	};
	return cities[city];
}

function t_or_f(field) {
	if ($(field).text() == 'true') {
		return 'true';
	} else {
		return 'false';
	}
}

function getAPIData(city) {
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "http://api.roomiapp.com/api/listings/search",
	  "method": "POST",
	  "headers": {
	    "Authorization": "Bearer __KEY__",
	    "content-type": "application/json",
	  },
	  "processData": false,
	  "data": "{\"continue\":\"\",\"limit\":100,\"q\":{\"region\":\"" + city + "\",\"maxPrice\":2000}}"
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);
	});

	// $.ajax(settings).done(function (response) {
	// 	$('#myDiv').append(response.results[0].createdAt);
	// });
}

