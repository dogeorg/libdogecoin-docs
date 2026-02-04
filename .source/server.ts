// @ts-nocheck
import * as __fd_glob_15 from "../content/docs/yubikey.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/what.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/transaction.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/transaction-extended.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/tools.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/signing.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/rest.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/release-process.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/projects.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/project-roadmap.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/getting-started.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/enclaves.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/eckey.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/changelog.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/address.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"address.mdx": __fd_glob_1, "changelog.mdx": __fd_glob_2, "eckey.mdx": __fd_glob_3, "enclaves.mdx": __fd_glob_4, "getting-started.mdx": __fd_glob_5, "project-roadmap.mdx": __fd_glob_6, "projects.mdx": __fd_glob_7, "release-process.mdx": __fd_glob_8, "rest.mdx": __fd_glob_9, "signing.mdx": __fd_glob_10, "tools.mdx": __fd_glob_11, "transaction-extended.mdx": __fd_glob_12, "transaction.mdx": __fd_glob_13, "what.mdx": __fd_glob_14, "yubikey.mdx": __fd_glob_15, });