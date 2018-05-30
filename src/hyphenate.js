import hypher from 'hypher';
import ru from 'hyphenation.ru';
import en from 'hyphenation.en-us';

var engines = new Array();
engines.push(new hypher(ru));
engines.push(new hypher(en));

export function* getTextLayers(context) {
    var doc = context.document;
    var selection = context.selection;

    if (selection.length === 0) {
        context.document.showMessage('No layers are selected.');
    } else {

        for (var i=0; i<selection.count(); i++) {
            if (selection[i].className() == "MSTextLayer") {
                yield layer = selection[i];
            };
        };

    };
};

export function addHyphens(context) {
    for (let layer of getTextLayers(context)) {
        var text = layer.stringValue();
        for (let i = 0; i < engines.length; i++) {
            text = engines[i].hyphenateText(text);            
        }
        layer.setStringValue(text);
    };
};

export function removeHyphens(context) {
    for (let layer of getTextLayers(context)) {
        var text = layer.stringValue();
        text = text.replace(/[\u00AD]/g, "");
        layer.setStringValue(text);
    };
};