import { activateLS, showFile, sleep, FILE_LOAD_SLEEP_TIME } from '../helper';
import { position, getDocUri } from '../util';
import { testCompletion } from './helper';

describe('Should autocomplete scaffold snippets', () => {
  const scriptDocUri = getDocUri('client/completion/script/Scaffold.ddx');

  before('activate', async () => {
    await activateLS();
    await showFile(scriptDocUri);
    await sleep(FILE_LOAD_SLEEP_TIME);
    // TS LS completion starts slow.
    await sleep(2000);
  });

  it('completes all scaffold snippets', async () => {
    await testCompletion(scriptDocUri, position(0, 1), [
      '<ddx> with default.ddx ✌',
      '<template> html.ddx ✌',
      '<template> pug.ddx ✌',
      '<style> css-scoped.ddx ✌',
      '<style> css.ddx ✌',
      '<style> less-scoped.ddx ✌',
      '<style> less.ddx ✌',
      '<style> postcss-scoped.ddx ✌',
      '<style> postcss.ddx ✌',
      '<style> sass-scoped.ddx ✌',
      '<style> sass.ddx ✌',
      '<style> scss-scoped.ddx ✌',
      '<style> scss.ddx ✌',
      '<style> stylus-scoped.ddx ✌',
      '<style> stylus.ddx ✌',
      '<script> javascript.ddx ✌',
      '<script> typescript.ddx ✌'
    ]);
  });

  it('completes project wide scaffold snippets', async () => {
    await testCompletion(scriptDocUri, position(0, 1), [
      {
        label: '<ddx> with foo.ddx 💼'
      }
    ]);
  });
});
