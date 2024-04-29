// Plugin Injector
// Not finished!!! Any bugs ping me in the discord @xstars

async function injectPlugins() {
    const iframes = document.querySelectorAll('iframe[data-tab-id]')
    const plugins = await getPlugins()
    iframes.forEach(function(iframe) {
        const scripts = iframe.contentDocument.querySelectorAll('script')
        const srcs = plugins.map(plugin => plugin.src)
        const isInjected = Array.from(scripts).some(script => srcs.includes(script.src))
        if (!isInjected) {
-            plugins.forEach(function(plugin) {
                const script = document.createElement('script')
                script.src = plugin.src
                iframe.contentDocument.body.appendChild(script)
            });
        }
    });
}

async function getPlugins() {
    const pluginsDat = localStorage.getItem('gfs')
    const pluginsArray = JSON.parse(pluginsDat)
    return pluginsArray
}

setInterval(injectPlugins, 1000)