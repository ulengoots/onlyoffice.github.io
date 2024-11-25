window.Asc.plugin.init = function() {
    document.getElementById("insertTextBtn").addEventListener("click", function() {
        // Insert 'Hello World' into the document
        window.Asc.plugin.executeMethod("InsertText", ["Hello, World!"]);
    });
};

window.Asc.plugin.button = function() {
    // Close the plugin interface
    this.executeCommand("close", "");
};
