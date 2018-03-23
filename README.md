# Zeplin extension to export Android Text Styles with support for custom fonts
As a proponent of using [Zeplin](https://zeplin.io) for bridging the gap between design and development, one element that has often pained me is the poor support of exporting text styles from Zeplin to Android. While technically possible, there are basic features that don't work properly or have not been updated keeping in mind updates that we've seen in Android over the years.

I'm building this extension to help alleviate these issues. 

## Ideal workflow
- Designers create mockups in Sketch and export to Zeplin
- Designers add text styles to Zeplin's styleguide fontbook
- Developers pick up a `textstyles.xml` file from the fontbook and add to their resources
- Developers pick up any additional resource XML files for fonts from Zeplin's styleguide
- Developers simply assign styles to their text views, thereby leaving control on specifics (such as font sizes, colors, line height, font style and weight) to their designers

By doing so, developers would be informed of any changes to the styleguide (addition/removal of styles, or changes to them), hence all they'd need to do in such cases is update their `textstyles.xml` file.

## Current status
The current extension exports the appropriate `textstyles.xml` file but does not yet create XML files for your font families yet. It has not been tested in a project yet, and is very much in active development. Upcoming features are mentioned in [Issues](https://github.com/raveeshbhalla/android-text-styles/issues). Pull requests and feature suggestions/requests are welcome.

## How to try out the extension
You need to install Zeplin's extension manager, the process for which is detailed [on their Github page](https://github.com/zeplin/zem#getting-started). Once installed
- clone this repository
- open your terminal
- `cd` into the repository
- run `npm start`
- Follow instructions mentioned [here](https://github.com/zeplin/zeplin-extension-documentation/blob/master/tutorial.md#adding-a-local-extension) to add the extension locally to Zeplin
