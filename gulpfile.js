import gulp from "gulp";

import ts from "gulp-typescript";

import gulpCopy from "gulp-copy";

import babel from 'gulp-babel';

import webpackStream from "webpack-stream";
import config from "./webpack.config.js";


const { src, dest, parallel } = gulp;

const project = ts.createProject("./tsconfig.json");

const entry = () => {
  return src("./src/**/*.ts").pipe(webpackStream(config)).pipe(dest("dist/scripts"));
};

const copyAsset = () => {
  return src(["src/images/*.png", "src/html/*.html"]).pipe(
    gulpCopy("dist", { prefix: 1 })
  );
};

export default parallel(entry, copyAsset);
