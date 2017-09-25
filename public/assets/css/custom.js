import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "nomargin-bottom": {
        "marginBottom": "0px !important"
    },
    "font-sm": {
        "fontSize": "0.8em !important"
    },
    "uppercase": {
        "textTransform": "uppercase"
    },
    "site-menu-icon": {
        "fontSize": "25px !important"
    },
    "site-menu-title": {
        "fontSize": "12px !important",
        "textShadow": "none !important"
    },
    "navbar-brand-logo": {
        "width": 120,
        "height": "auto !important",
        "marginTop": -18,
        "marginLeft": -9
    },
    "icon-nav:before": {
        "fontSize": 24
    },
    "layout-full": {
        "backgroundColor": "#F8F8F8"
    },
    "centered": {
        "float": "none",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "clear": {
        "clear": "both"
    },
    "font-family-opensans": {
        "fontFamily": "'Open Sans', sans-serif"
    },
    "font-lighter": {
        "fontWeight": "100"
    },
    "font-normal": {
        "fontWeight": "400"
    },
    "font-semibold": {
        "fontWeight": "600"
    },
    "font-bold": {
        "fontWeight": "700"
    },
    "font-uppercase": {
        "textTransform": "uppercase"
    },
    "active-custom": {
        "color": "#3aa99e !important"
    },
    "screen": {
        "position": "absolute",
        "width": "100%",
        "backgroundColor": "rgb(241, 244, 245)"
    },
    "full-height": {
        "minHeight": "100% !important",
        "height": "auto !important"
    }
});