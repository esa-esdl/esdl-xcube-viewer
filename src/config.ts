import { blue, green, grey, purple, red, pink, yellow, orange, cyan, indigo } from "@material-ui/core/colors";
import { LanguageDictionary } from "./util/lang";
import lang from "./resources/lang.json";

export const VIEWER_APP_NAME = 'xcube Viewer';

export const VIEWER_DEFAULT_API_SERVER = {
    id: 'local',
    name: 'Server on earthsystemdatalab',
    url: 'https://xcube.earthsystemdatalab.net/esdl-dev'
};

export const VIEWER_API_SERVERS = [
    {...VIEWER_DEFAULT_API_SERVER},
];

export const VIEWER_THEME = 'dark';
export const VIEWER_PRIMARY_COLOR = blue;
export const VIEWER_SECONDARY_COLOR = pink;

export const VIEWER_LOGO_WIDTH = 32;
export const VIEWER_HEADER_BACKGROUND_COLOR = undefined;

export const LINE_CHART_STROKE_SHADE_DARK_THEME = 400;
export const LINE_CHART_STROKE_SHADE_LIGHT_THEME = 800;

export const USER_PLACES_COLORS = {green, red, blue, yellow, purple, pink, orange, cyan, indigo, grey};
export const USER_PLACES_COLOR_NAMES = Object.keys(USER_PLACES_COLORS);

export const I18N = new LanguageDictionary(lang);