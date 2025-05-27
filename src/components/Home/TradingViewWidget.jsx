// TradingViewWidget.jsx
import { useEffect, useRef } from "react";

function TradingViewWidget() {
    const widgetRef = useRef(null);

    useEffect(() => {

        if (!widgetRef.current) return;

        // Create a unique id for the widget container
        const containerId = "tradingview-widget-container-" + Math.random().toString(36).substr(2, 9);
        widgetRef.current.id = containerId;
        
        // Remove any previous widget
        widgetRef.current.innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [["BINANCE:SOLUSDT|7D"]],
            chartOnly: false,
            width: "100%",
            height: "100%",
            locale: "en",
            colorTheme: "dark",
            autosize: true,
            showVolume: false,
            showMA: false,
            hideDateRanges: false,
            hideMarketStatus: false,
            hideSymbolLogo: false,
            scalePosition: "right",
            scaleMode: "Normal",
            fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
            fontSize: "10",
            noTimeScale: false,
            valuesTracking: "1",
            changeMode: "price-and-percent",
            chartType: "area",
            maLineColor: "#2962FF",
            maLineWidth: 1,
            maLength: 9,
            headerFontSize: "small",
            lineWidth: 2,
            lineType: 0,
            dateRanges: [
                "1w|240"
            ]
        });
        widgetRef.current.appendChild(script);

        // Cleanup on unmount
        return () => {
            if (widgetRef.current) {
                widgetRef.current.innerHTML = "";
            }
        };
    }, []);

    return (
        <div className="tradingview-widget-container" style={{ height: "350px", width: "100%" }}>
            <div className="tradingview-widget-container__widget input-gradient-border-new animate-border" ref={widgetRef} style={{ height: "100%" }} />
            <div className="tradingview-widget-copyright"></div>
        </div>
    );
}

export default TradingViewWidget;