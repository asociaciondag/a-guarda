import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import metas from "lume/plugins/metas.ts";

const site = lume();

site.use(postcss());
site.use(metas());
site.copy("logo.svg");
site.copy("cover.png");
site.copy("isaac");

export default site;
