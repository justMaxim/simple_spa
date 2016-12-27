jQuery('document').ready(function () {

				jQuery('.historyAPI').on('click', function (e) {
					e.preventDefault();
					var href = $(this).attr('href');

					// Getting Content
					getContent(href, true);

					jQuery('.historyAPI').removeClass('active');
					$(this).addClass('active');
				});

			});

			// Adding popstate event listener to handle browser back button
			window.addEventListener("popstate", function (e) {

				// Get State value using e.state
				getContent(location.pathname, false);
			});

			function getContent(url, addEntry) {
				var data;

				switch (url) {
					case "home.html" : data = "<h2>Home</h2>";
						break;
					case "about.html" : data = "<h2>About</h2>";
						break;
					case "contact.html" : data = "<h2>Contact</h2>";
						break;
					default: data = "<h1>401 Not found</h1>";
						break;
				}

						// Updating Content on Page
				$('#contentHolder').html(data);

				if (addEntry == true) {
					// Add History Entry using pushState
					history.pushState(null, null, url);
				}
			}