import escapeStringRegexp from 'escape-string-regexp';
import reactTemplates from 'react-templates/src/reactTemplates';
import { parse as babylonParse } from 'babylon';

const defaultOpts = {
  modules: 'es6',
  targetVersion: '0.14.0'
};

export default {
  parse(code, opts) {
    let codeToParse = code;
    const rtOpts = opts.rt || {};
    const ext = rtOpts.fileExt || '.rt';
    const regexExt = new RegExp(escapeStringRegexp(ext) + '$');
    if (regexExt.test(opts.sourceFilename || opts.sourceFileName)) {
      codeToParse = reactTemplates.convertTemplateToReact(code, Object.assign(defaultOpts, rtOpts));
    }
    const { parser } = opts;
    const parse = parser.parse || babylonParse;
    return parse(codeToParse, opts);
  }
};
