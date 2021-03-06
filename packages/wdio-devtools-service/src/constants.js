/**
 * performance tracing categories
 */
export const DEFAULT_TRACING_CATEGORIES = [
    '-*', 'devtools.timeline', 'v8.execute', 'disabled-by-default-devtools.timeline',
    'disabled-by-default-devtools.timeline.frame', 'toplevel',
    'blink.console', 'blink.user_timing', 'latencyInfo', 'disabled-by-default-devtools.timeline.stack',
    'disabled-by-default-v8.cpu_profiler', 'disabled-by-default-devtools.screenshot'
]

/**
 * ignored urls in request logger
 */
export const IGNORED_URLS = [
    'data:,', // empty pages
    'about:', // new tabs
    'chrome-extension://' // all chrome extensions
]
