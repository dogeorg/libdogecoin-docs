// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"address.mdx": () => import("../content/docs/address.mdx?collection=docs"), "changelog.mdx": () => import("../content/docs/changelog.mdx?collection=docs"), "eckey.mdx": () => import("../content/docs/eckey.mdx?collection=docs"), "enclaves.mdx": () => import("../content/docs/enclaves.mdx?collection=docs"), "getting-started.mdx": () => import("../content/docs/getting-started.mdx?collection=docs"), "project-roadmap.mdx": () => import("../content/docs/project-roadmap.mdx?collection=docs"), "projects.mdx": () => import("../content/docs/projects.mdx?collection=docs"), "release-process.mdx": () => import("../content/docs/release-process.mdx?collection=docs"), "rest.mdx": () => import("../content/docs/rest.mdx?collection=docs"), "signing.mdx": () => import("../content/docs/signing.mdx?collection=docs"), "tools.mdx": () => import("../content/docs/tools.mdx?collection=docs"), "transaction-extended.mdx": () => import("../content/docs/transaction-extended.mdx?collection=docs"), "transaction.mdx": () => import("../content/docs/transaction.mdx?collection=docs"), "what.mdx": () => import("../content/docs/what.mdx?collection=docs"), "yubikey.mdx": () => import("../content/docs/yubikey.mdx?collection=docs"), }),
};
export default browserCollections;