import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import * as del from "del";
import * as plumber from "gulp-plumber";


import {CLIOptions} from 'aurelia-cli';
import { protractor, webdriver_standalone, webdriver_update } from 'gulp-protractor';
import run from "./run";
import {config} from '../../protractor.conf';

const allSpecs = () => {
  const suites = Object.keys(config.suites);
  return suites.reduce((acc, suite) => [...acc, ...config.suites[suite]], []);
};
const E2E = (project as any).e2eTestRunner;
const flags = {
  'suite': () => {
    const suites = Object.keys(config.suites);
    const suite = CLIOptions.getFlagValue('suite');

    return {
      specs: suites[suite] ? suites[suite] : allSpecs(),
      args: ['--suite', suite]
    };
  },
  'spec': () => {
    return {
      specs: E2E.dist + '**/' + CLIOptions.getFlagValue('spec') + '.spec.js',
      args: []
    };
  },
  'all': () => {
    return {
      specs: allSpecs(),
      args: []
    };
  }
};
function e2e() {
  const flag = Object.keys(flags).find(f => CLIOptions.hasFlag(f)) || 'all';
  const { specs, args } = flags[flag]();

  return gulp.src(specs)
    .pipe(protractor({ configFile: 'protractor.conf.js', args }))
    .on('end', () => {
      process.exit();
    })
    .on('error', (e) => {
      process.exit();
      // throw e;
    });
}

function clean() {
  return del(E2E.dist + '*');
}

function build() {
  const typescriptCompiler = ts.createProject('tsconfig.e2e.json', {
    typescript: require('typescript'),
    module: 'commonjs'
  });

  return gulp.src([...E2E.typingsSource, E2E.source])
    .pipe(plumber())
    .pipe(typescriptCompiler())
    .pipe(gulp.dest(E2E.dist));
}

export default gulp.series(
  clean,
  build,
  run,
  e2e
);
