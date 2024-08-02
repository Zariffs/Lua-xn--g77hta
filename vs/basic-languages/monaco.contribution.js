/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 2.3.0(57af10ae0184db4e0f7f9a92ff972629c39ccb53)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/fillers/monaco-editor-core", [], function () {
    return self.monaco;
}),
    define(
        "vs/basic-languages/_.contribution",
        ["require", "exports", "./fillers/monaco-editor-core"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                (i.registerLanguage = i.loadLanguage = void 0);
            var n = {},
                s = {},
                r = (function () {
                    function e(e) {
                        var i = this;
                        (this._languageId = e),
                            (this._loadingTriggered = !1),
                            (this._lazyLoadPromise = new Promise(function (e, t) {
                                (i._lazyLoadPromiseResolve = e), (i._lazyLoadPromiseReject = t);
                            }));
                    }
                    return (
                        (e.getOrCreate = function (i) {
                            return s[i] || (s[i] = new e(i)), s[i];
                        }),
                        (e.prototype.whenLoaded = function () {
                            return this._lazyLoadPromise;
                        }),
                        (e.prototype.load = function () {
                            var e = this;
                            return (
                                this._loadingTriggered ||
                                ((this._loadingTriggered = !0),
                                    n[this._languageId].loader().then(
                                        function (i) {
                                            return e._lazyLoadPromiseResolve(i);
                                        },
                                        function (i) {
                                            return e._lazyLoadPromiseReject(i);
                                        }
                                    )),
                                this._lazyLoadPromise
                            );
                        }),
                        e
                    );
                })();
            (i.loadLanguage = function (e) {
                return r.getOrCreate(e).load();
            }),
                (i.registerLanguage = function (e) {
                    var i = e.id;
                    (n[i] = e), t.languages.register(e);
                    var s = r.getOrCreate(i);
                    t.languages.setMonarchTokensProvider(
                        i,
                        s.whenLoaded().then(function (e) {
                            return e.language;
                        })
                    ),
                        t.languages.onLanguage(i, function () {
                            s.load().then(function (e) {
                                t.languages.setLanguageConfiguration(i, e.conf);
                            });
                        });
                });
        }
    ),
    define(
        "vs/basic-languages/abap/abap.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "abap",
                    extensions: [".abap"],
                    aliases: ["abap", "ABAP"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./abap"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/apex/apex.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "apex",
                    extensions: [".cls"],
                    aliases: ["Apex", "apex"],
                    mimetypes: ["text/x-apex-source", "text/x-apex"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./apex"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/azcli/azcli.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "azcli",
                    extensions: [".azcli"],
                    aliases: ["Azure CLI", "azcli"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./azcli"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/bat/bat.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "bat",
                    extensions: [".bat", ".cmd"],
                    aliases: ["Batch", "bat"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./bat"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/cameligo/cameligo.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "cameligo",
                    extensions: [".mligo"],
                    aliases: ["Cameligo"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./cameligo"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/clojure/clojure.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "clojure",
                    extensions: [".clj", ".cljs", ".cljc", ".edn"],
                    aliases: ["clojure", "Clojure"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./clojure"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/coffee/coffee.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "coffeescript",
                    extensions: [".coffee"],
                    aliases: ["CoffeeScript", "coffeescript", "coffee"],
                    mimetypes: ["text/x-coffeescript", "text/coffeescript"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./coffee"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/cpp/cpp.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "c",
                    extensions: [".c", ".h"],
                    aliases: ["C", "c"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./cpp"], i, t);
                        });
                    },
                }),
                t.registerLanguage({
                    id: "cpp",
                    extensions: [".cpp", ".cc", ".cxx", ".hpp", ".hh", ".hxx"],
                    aliases: ["C++", "Cpp", "cpp"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./cpp"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/csharp/csharp.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "csharp",
                    extensions: [".cs", ".csx", ".cake"],
                    aliases: ["C#", "csharp"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./csharp"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/csp/csp.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "csp",
                    extensions: [],
                    aliases: ["CSP", "csp"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./csp"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/css/css.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "css",
                    extensions: [".css"],
                    aliases: ["CSS", "css"],
                    mimetypes: ["text/css"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./css"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/dart/dart.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "dart",
                    extensions: [".dart"],
                    aliases: ["Dart", "dart"],
                    mimetypes: ["text/x-dart-source", "text/x-dart"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./dart"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/dockerfile/dockerfile.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "dockerfile",
                    extensions: [".dockerfile"],
                    filenames: ["Dockerfile"],
                    aliases: ["Dockerfile"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./dockerfile"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/ecl/ecl.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "ecl",
                    extensions: [".ecl"],
                    aliases: ["ECL", "Ecl", "ecl"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./ecl"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/fsharp/fsharp.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "fsharp",
                    extensions: [".fs", ".fsi", ".ml", ".mli", ".fsx", ".fsscript"],
                    aliases: ["F#", "FSharp", "fsharp"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./fsharp"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/go/go.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "go",
                    extensions: [".go"],
                    aliases: ["Go"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./go"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/graphql/graphql.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "graphql",
                    extensions: [".graphql", ".gql"],
                    aliases: ["GraphQL", "graphql", "gql"],
                    mimetypes: ["application/graphql"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./graphql"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/handlebars/handlebars.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "handlebars",
                    extensions: [".handlebars", ".hbs"],
                    aliases: ["Handlebars", "handlebars"],
                    mimetypes: ["text/x-handlebars-template"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./handlebars"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/hcl/hcl.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "hcl",
                    extensions: [".tf", ".tfvars", ".hcl"],
                    aliases: ["Terraform", "tf", "HCL", "hcl"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./hcl"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/html/html.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "html",
                    extensions: [
                        ".html",
                        ".htm",
                        ".shtml",
                        ".xhtml",
                        ".mdoc",
                        ".jsp",
                        ".asp",
                        ".aspx",
                        ".jshtm",
                    ],
                    aliases: ["HTML", "htm", "html", "xhtml"],
                    mimetypes: [
                        "text/html",
                        "text/x-jshtm",
                        "text/template",
                        "text/ng-template",
                    ],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./html"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/ini/ini.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "ini",
                    extensions: [".ini", ".properties", ".gitconfig"],
                    filenames: [
                        "config",
                        ".gitattributes",
                        ".gitconfig",
                        ".editorconfig",
                    ],
                    aliases: ["Ini", "ini"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./ini"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/java/java.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "java",
                    extensions: [".java", ".jav"],
                    aliases: ["Java", "java"],
                    mimetypes: ["text/x-java-source", "text/x-java"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./java"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/javascript/javascript.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "javascript",
                    extensions: [".js", ".es6", ".jsx", ".mjs"],
                    firstLine: "^#!.*\\bnode",
                    filenames: ["jakefile"],
                    aliases: ["JavaScript", "javascript", "js"],
                    mimetypes: ["text/javascript"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./javascript"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/julia/julia.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "julia",
                    extensions: [".jl"],
                    aliases: ["julia", "Julia"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./julia"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/kotlin/kotlin.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "kotlin",
                    extensions: [".kt"],
                    aliases: ["Kotlin", "kotlin"],
                    mimetypes: ["text/x-kotlin-source", "text/x-kotlin"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./kotlin"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/less/less.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "less",
                    extensions: [".less"],
                    aliases: ["Less", "less"],
                    mimetypes: ["text/x-less", "text/less"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./less"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/lexon/lexon.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "lexon",
                    extensions: [".lex"],
                    aliases: ["Lexon"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./lexon"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/lua/lua.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "lua",
                    extensions: [".lua"],
                    aliases: ["Lua", "lua"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./lua"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/m3/m3.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "m3",
                    extensions: [".m3", ".i3", ".mg", ".ig"],
                    aliases: ["Modula-3", "Modula3", "modula3", "m3"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./m3"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/markdown/markdown.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "markdown",
                    extensions: [
                        ".md",
                        ".markdown",
                        ".mdown",
                        ".mkdn",
                        ".mkd",
                        ".mdwn",
                        ".mdtxt",
                        ".mdtext",
                    ],
                    aliases: ["Markdown", "markdown"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./markdown"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/mips/mips.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "mips",
                    extensions: [".s"],
                    aliases: ["MIPS", "MIPS-V"],
                    mimetypes: ["text/x-mips", "text/mips", "text/plaintext"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./mips"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/msdax/msdax.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "msdax",
                    extensions: [".dax", ".msdax"],
                    aliases: ["DAX", "MSDAX"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./msdax"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/mysql/mysql.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "mysql",
                    extensions: [],
                    aliases: ["MySQL", "mysql"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./mysql"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/objective-c/objective-c.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "objective-c",
                    extensions: [".m"],
                    aliases: ["Objective-C"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./objective-c"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/pascal/pascal.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "pascal",
                    extensions: [".pas", ".p", ".pp"],
                    aliases: ["Pascal", "pas"],
                    mimetypes: ["text/x-pascal-source", "text/x-pascal"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./pascal"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/pascaligo/pascaligo.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "pascaligo",
                    extensions: [".ligo"],
                    aliases: ["Pascaligo", "ligo"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./pascaligo"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/perl/perl.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "perl",
                    extensions: [".pl"],
                    aliases: ["Perl", "pl"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./perl"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/pgsql/pgsql.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "pgsql",
                    extensions: [],
                    aliases: ["PostgreSQL", "postgres", "pg", "postgre"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./pgsql"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/php/php.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "php",
                    extensions: [".php", ".php4", ".php5", ".phtml", ".ctp"],
                    aliases: ["PHP", "php"],
                    mimetypes: ["application/x-php"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./php"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/postiats/postiats.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "postiats",
                    extensions: [".dats", ".sats", ".hats"],
                    aliases: ["ATS", "ATS/Postiats"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./postiats"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/powerquery/powerquery.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "powerquery",
                    extensions: [".pq", ".pqm"],
                    aliases: ["PQ", "M", "Power Query", "Power Query M"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./powerquery"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/powershell/powershell.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "powershell",
                    extensions: [".ps1", ".psm1", ".psd1"],
                    aliases: ["PowerShell", "powershell", "ps", "ps1"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./powershell"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/pug/pug.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "pug",
                    extensions: [".jade", ".pug"],
                    aliases: ["Pug", "Jade", "jade"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./pug"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/python/python.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "python",
                    extensions: [".py", ".rpy", ".pyw", ".cpy", ".gyp", ".gypi"],
                    aliases: ["Python", "py"],
                    firstLine: "^#!/.*\\bpython[0-9.-]*\\b",
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./python"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/r/r.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "r",
                    extensions: [".r", ".rhistory", ".rmd", ".rprofile", ".rt"],
                    aliases: ["R", "r"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./r"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/razor/razor.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "razor",
                    extensions: [".cshtml"],
                    aliases: ["Razor", "razor"],
                    mimetypes: ["text/x-cshtml"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./razor"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/redis/redis.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "redis",
                    extensions: [".redis"],
                    aliases: ["redis"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./redis"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/redshift/redshift.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "redshift",
                    extensions: [],
                    aliases: ["Redshift", "redshift"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./redshift"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/restructuredtext/restructuredtext.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "restructuredtext",
                    extensions: [".rst"],
                    aliases: ["reStructuredText", "restructuredtext"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./restructuredtext"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/ruby/ruby.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "ruby",
                    extensions: [".rb", ".rbx", ".rjs", ".gemspec", ".pp"],
                    filenames: ["rakefile", "Gemfile"],
                    aliases: ["Ruby", "rb"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./ruby"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/rust/rust.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "rust",
                    extensions: [".rs", ".rlib"],
                    aliases: ["Rust", "rust"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./rust"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/sb/sb.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "sb",
                    extensions: [".sb"],
                    aliases: ["Small Basic", "sb"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./sb"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/scala/scala.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "scala",
                    extensions: [".scala", ".sc", ".sbt"],
                    aliases: ["Scala", "scala", "SBT", "Sbt", "sbt", "Dotty", "dotty"],
                    mimetypes: [
                        "text/x-scala-source",
                        "text/x-scala",
                        "text/x-sbt",
                        "text/x-dotty",
                    ],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./scala"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/scheme/scheme.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "scheme",
                    extensions: [".scm", ".ss", ".sch", ".rkt"],
                    aliases: ["scheme", "Scheme"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./scheme"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/scss/scss.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "scss",
                    extensions: [".scss"],
                    aliases: ["Sass", "sass", "scss"],
                    mimetypes: ["text/x-scss", "text/scss"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./scss"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/shell/shell.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "shell",
                    extensions: [".sh", ".bash"],
                    aliases: ["Shell", "sh"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./shell"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/solidity/solidity.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "sol",
                    extensions: [".sol"],
                    aliases: ["sol", "solidity", "Solidity"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./solidity"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/sophia/sophia.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "aes",
                    extensions: [".aes"],
                    aliases: ["aes", "sophia", "Sophia"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./sophia"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/sql/sql.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "sql",
                    extensions: [".sql"],
                    aliases: ["SQL"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./sql"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/st/st.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "st",
                    extensions: [".st", ".iecst", ".iecplc", ".lc3lib"],
                    aliases: ["StructuredText", "scl", "stl"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./st"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/swift/swift.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "swift",
                    aliases: ["Swift", "swift"],
                    extensions: [".swift"],
                    mimetypes: ["text/swift"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./swift"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/systemverilog/systemverilog.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "systemverilog",
                    extensions: [".sv", ".svh"],
                    aliases: ["SV", "sv", "SystemVerilog", "systemverilog"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./systemverilog"], i, t);
                        });
                    },
                }),
                t.registerLanguage({
                    id: "verilog",
                    extensions: [".v", ".vh"],
                    aliases: ["V", "v", "Verilog", "verilog"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./systemverilog"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/tcl/tcl.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "tcl",
                    extensions: [".tcl"],
                    aliases: ["tcl", "Tcl", "tcltk", "TclTk", "tcl/tk", "Tcl/Tk"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./tcl"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/twig/twig.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "twig",
                    extensions: [".twig"],
                    aliases: ["Twig", "twig"],
                    mimetypes: ["text/x-twig"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./twig"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/typescript/typescript.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "typescript",
                    extensions: [".ts", ".tsx"],
                    aliases: ["TypeScript", "ts", "typescript"],
                    mimetypes: ["text/typescript"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./typescript"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/vb/vb.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "vb",
                    extensions: [".vb"],
                    aliases: ["Visual Basic", "vb"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./vb"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/xml/xml.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "xml",
                    extensions: [
                        ".xml",
                        ".dtd",
                        ".ascx",
                        ".csproj",
                        ".config",
                        ".wxi",
                        ".wxl",
                        ".wxs",
                        ".xaml",
                        ".svg",
                        ".svgz",
                        ".opf",
                        ".xsl",
                    ],
                    firstLine: "(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",
                    aliases: ["XML", "xml"],
                    mimetypes: [
                        "text/xml",
                        "application/xml",
                        "application/xaml+xml",
                        "application/xml-dtd",
                    ],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./xml"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/yaml/yaml.contribution",
        ["require", "exports", "../_.contribution"],
        function (e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 }),
                t.registerLanguage({
                    id: "yaml",
                    extensions: [".yaml", ".yml"],
                    aliases: ["YAML", "yaml", "YML", "yml"],
                    mimetypes: ["application/x-yaml", "text/x-yaml"],
                    loader: function () {
                        return new Promise(function (i, t) {
                            e(["./yaml"], i, t);
                        });
                    },
                });
        }
    ),
    define(
        "vs/basic-languages/monaco.contribution",
        [
            "require",
            "exports",
            "./abap/abap.contribution",
            "./apex/apex.contribution",
            "./azcli/azcli.contribution",
            "./bat/bat.contribution",
            "./cameligo/cameligo.contribution",
            "./clojure/clojure.contribution",
            "./coffee/coffee.contribution",
            "./cpp/cpp.contribution",
            "./csharp/csharp.contribution",
            "./csp/csp.contribution",
            "./css/css.contribution",
            "./dart/dart.contribution",
            "./dockerfile/dockerfile.contribution",
            "./ecl/ecl.contribution",
            "./fsharp/fsharp.contribution",
            "./go/go.contribution",
            "./graphql/graphql.contribution",
            "./handlebars/handlebars.contribution",
            "./hcl/hcl.contribution",
            "./html/html.contribution",
            "./ini/ini.contribution",
            "./java/java.contribution",
            "./javascript/javascript.contribution",
            "./julia/julia.contribution",
            "./kotlin/kotlin.contribution",
            "./less/less.contribution",
            "./lexon/lexon.contribution",
            "./lua/lua.contribution",
            "./m3/m3.contribution",
            "./markdown/markdown.contribution",
            "./mips/mips.contribution",
            "./msdax/msdax.contribution",
            "./mysql/mysql.contribution",
            "./objective-c/objective-c.contribution",
            "./pascal/pascal.contribution",
            "./pascaligo/pascaligo.contribution",
            "./perl/perl.contribution",
            "./pgsql/pgsql.contribution",
            "./php/php.contribution",
            "./postiats/postiats.contribution",
            "./powerquery/powerquery.contribution",
            "./powershell/powershell.contribution",
            "./pug/pug.contribution",
            "./python/python.contribution",
            "./r/r.contribution",
            "./razor/razor.contribution",
            "./redis/redis.contribution",
            "./redshift/redshift.contribution",
            "./restructuredtext/restructuredtext.contribution",
            "./ruby/ruby.contribution",
            "./rust/rust.contribution",
            "./sb/sb.contribution",
            "./scala/scala.contribution",
            "./scheme/scheme.contribution",
            "./scss/scss.contribution",
            "./shell/shell.contribution",
            "./solidity/solidity.contribution",
            "./sophia/sophia.contribution",
            "./sql/sql.contribution",
            "./st/st.contribution",
            "./swift/swift.contribution",
            "./systemverilog/systemverilog.contribution",
            "./tcl/tcl.contribution",
            "./twig/twig.contribution",
            "./typescript/typescript.contribution",
            "./vb/vb.contribution",
            "./xml/xml.contribution",
            "./yaml/yaml.contribution",
        ],
        function (e, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", { value: !0 });
        }
    );
