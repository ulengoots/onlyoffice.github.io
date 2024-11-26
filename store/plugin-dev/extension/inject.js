(function(window, undefined) {
	var URL_TO_PLUGIN = "https://onlyoffice-test.prescribe-digital.com/sdkjs-plugins/helloworld/";

	console.log("Attempting to load plugin from:", URL_TO_PLUGIN);
	console.log("Config file path:", URL_TO_PLUGIN + "config.json");
	
	var xhrObj = new XMLHttpRequest();
	xhrObj.open('GET', URL_TO_PLUGIN + "config.json", false);
	try {
		xhrObj.send(null);

		if (xhrObj.status === 200) {
			console.log("Config file loaded successfully:", xhrObj.responseText);
			var configObj = JSON.parse(xhrObj.responseText);
			configObj.baseUrl = URL_TO_PLUGIN;

			console.log("Parsed config object:", configObj);

			window.Asc = window.Asc ? window.Asc : {};
			window.Asc.extensionPlugins = window.Asc.extensionPlugins ? window.Asc.extensionPlugins : [];
			window.Asc.extensionPlugins.push(configObj);

			if (window.Asc.g_asc_plugins && window.Asc.g_asc_plugins.loadExtensionPlugins) {
				window.Asc.g_asc_plugins.loadExtensionPlugins(window.Asc.extensionPlugins);
				window.Asc.extensionPlugins = [];
			}
		} else {
			console.error("Failed to load config file:", xhrObj.statusText);
		}
	} catch (error) {
		console.error("Error while sending request:", error);
	}
})(window, undefined);
