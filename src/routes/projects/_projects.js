import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { mdsvex } from 'mdsvex';

export default function() {
  return fs
    .readdirSync('content/project')
    .map(file => {
      if (path.extname(file) !== '.md') return;
      const slug = file.replace(/^[\d-]+/, '').replace(/\.md$/, '');

      const markdown = fs.readFileSync(`content/project/${file}`, 'utf-8');

      const pattern = /(^-{3}(?:\r\n|\r|\n)([\w\W]*?)-{3}(?:\r\n|\r|\n))?([\w\W]*)*/;
      const matches = markdown.match(pattern);

      const metadata = yaml.load(matches[2]) || {};

      const html = mdsvex().markup({ content: markdown, filename: `${file}.svexy` }).code;

      const date = new Date(`${metadata.pubdate} GMT+1000`); // cheeky hack
      metadata.dateString = date.toDateString();

      return {
        html,
        metadata,
        slug,
      };
    }).sort((a, b) => {
      return a.metadata.pubdate < b.metadata.pubdate ? 1 : -1;
    }).filter(el => {return el != null;});
}
