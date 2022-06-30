
module.exports = function (config) {
    
    // Copy my public folder to the output.
    config.addPassthroughCopy({"src/public/": "./"});

	config.setBrowserSyncConfig({
		files: './dist/assets/css/*.css'
	});

    if(process.env.ELEVENTY_ENV == "dev"){
        console.log("Running in DEV mode");
    } else if(process.env.ELEVENTY_ENV == "prod"){
        console.log("Building for Production");
    }

    return {
        dir: {
            input: "src/site",
            output: "dist",
            layouts: "_layouts/"
        }
    };
};