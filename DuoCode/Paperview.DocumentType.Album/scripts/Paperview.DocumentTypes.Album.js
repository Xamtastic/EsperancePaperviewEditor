/*!
* Paperview.DocumentTypes.Album, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
*
* Generated by DuoCode Compiler 2.0.1542.0 [Trial]
*/
(function Paperview_DocumentTypes_Album() {
"use strict";
var $asm = {
    fullName: "Paperview.DocumentTypes.Album",
    anonymousTypes: [],
    types: [],
    $getAttrs: function() { return [new System.Reflection.AssemblyTitleAttribute.ctor("xPaperview"), new System.Reflection.AssemblyDescriptionAttribute.ctor(""), new System.Reflection.AssemblyConfigurationAttribute.ctor(""), new System.Reflection.AssemblyCompanyAttribute.ctor(""), new System.Reflection.AssemblyProductAttribute.ctor("yPaperview"), new System.Reflection.AssemblyCopyrightAttribute.ctor("Copyright \xA9  2016"), new System.Reflection.AssemblyTrademarkAttribute.ctor(""), new System.Reflection.AssemblyCultureAttribute.ctor(""), new System.Reflection.AssemblyVersionAttribute.ctor("1.0.0.0"), new System.Reflection.AssemblyFileVersionAttribute.ctor("1.0.0.0"), new DuoCode.Runtime.CompilerAttribute.ctor("2.0.1542.0")]; }
};
var $g = (typeof(global) !== "undefined" ? global : (typeof(window) !== "undefined" ? window : self));
var Paperview = $g.Paperview = $g.Paperview || {};
Paperview.DocumentTypes = Paperview.DocumentTypes || {};
Paperview.DocumentTypes.Album = Paperview.DocumentTypes.Album || {};
var $d = DuoCode.Runtime;
$d.$assemblies["Paperview.DocumentTypes.Album"] = $asm;
Paperview.DocumentTypes.Album.AlbumApplication = $d.declare("Paperview.DocumentTypes.Album.AlbumApplication", 
    0, $asm);
Paperview.DocumentTypes.Album.Program = $d.declare("Paperview.DocumentTypes.Album.Program", 0, $asm);
$d.define(Paperview.DocumentTypes.Album.AlbumApplication, null, function($t, $p) {
    $t.$ator = function() {
        this._publishers = null;
        this._selectedPublisher = null;
        this._selectPublisherAction = null;
        this._publisherPane = null;
    };
    $t.ctor = function AlbumApplication(rootElement) {
        $t.$baseType.ctor.call(this);
        this._selectPublisherAction = $d.delegate(function(publisherId) {
            System.Console.WriteLine$10(String.Format("xSelected Index: {0}", [publisherId]));

            if (publisherId >= 0) {
                System.Console.WriteLine$10(String.Format("XXSelected Publisher: {0}", [this._publishers.get_Item(publisherId).get_Name()]));
                this._publisherPane.set_DataSource(this._publishers.get_Item(publisherId));
            }
            else {
                this._publisherPane.set_DataSource(null);
            }
        }, this);

        var microformat = new Paperview.Common.Microformat.ctor();

        //#region 
        // The following describes this specific DocumentType application.
        // The Microformat object above describes the user's specific instance of this Document Type.
        var microformatName = new (System.Collections.Generic.Dictionary$2(String, String, 27758).ctor)();
        microformatName.Add$1("en", "Album");
        microformatName.Add$1("fr", "tbt");
        microformatName.Add$1("de", "tbt");
        microformatName.Add$1("es", "tbt");

        var microformatDescription = new (System.Collections.Generic.Dictionary$2(String, String, 27758).ctor)();
        microformatDescription.Add$1("en", "An Image Album");
        microformatDescription.Add$1("fr", "tbt");
        microformatDescription.Add$1("de", "tbt");
        microformatDescription.Add$1("es", "tbt");

        var document = new Paperview.Common.Document.ctor();
        document.set_DocumentId("1878B000-77ED-417E-BE71-69CBFC716B3C");
        document.set_MicroformatId("1878B000-77ED-417E-BE71-69CBFC716B3C");
        document.set_PresentationId("1878B000-77ED-417E-BE71-69CBFC716B3C");
        document.set_LanguageAvailability(new (System.Collections.Generic.List$1(String, 40320).ctor$1)($d.array(String, 
            ["en", "fr", "de", "es"])));
        document.set_LanguageDefault("en");
        document.set_MicroformatName(microformatName);
        document.set_MicroformatDescription(microformatDescription);
        document.set_Microformat(microformat);
        //#endregion

        this._publishers = new (System.Collections.Generic.List$1(Paperview.Common.Publisher, 15629).ctor)();

        this._publishers.Add((function() {
            var $obj = new Paperview.Common.Publisher.ctor();
            $obj.set_Id(System.Guid.NewGuid().toString());
            $obj.set_Name("Esperance");
            $obj.set_Email("anthony.harrison@xamtastic.com");
            $obj.set_Url("http://www.esperance.chat");
            return $obj;
        }).call(this));

        this._publishers.Add((function() {
            var $obj = new Paperview.Common.Publisher.ctor();
            $obj.set_Id(System.Guid.NewGuid().toString());
            $obj.set_Name("Xamtastic");
            $obj.set_Email("anthony.harrison@xamtastic.com");
            $obj.set_Url("http://www.xamtastic.com");
            return $obj;
        }).call(this));

        this._publishers.Add((function() {
            var $obj = new Paperview.Common.Publisher.ctor();
            $obj.set_Id(System.Guid.NewGuid().toString());
            $obj.set_Name("Captain Xamtastic");
            $obj.set_Email("anthony.harrison@captainxamtastic.com");
            $obj.set_Url("http://www.captainxamtastic.com");
            return $obj;
        }).call(this));



        var albumMicroformat = (function() {
            var $obj = new Paperview.Microformats.Album.AlbumMicroformat.ctor();
            $obj.set_Document(document);
            $obj.set_Publisher(this._publishers.get_Item(0));
            return $obj;
        }).call(this);

        // new PublisherPane(rootElement, Idiom.Phone);
        //new PublisherPane(rootElement, publisher, Idiom.Phone);
        //new Panel(rootElement, new PublisherPane(publishers[0], Idiom.Phone).GetContainer(), "Publisher", Idiom.Phone);
        //new DocumentTypePane(rootElement, albumMicroformat.Document, Idiom.Phone, "en");
        //new Panel(rootElement, new DocumentTypePane(albumMicroformat.Document, Idiom.Desktop, "en").GetContainer(), "Document Type", Idiom.Desktop);

        // new DropDownListPane(rootElement, publishers, Idiom.Phone);
        new Paperview.Common.Ui.Panel.ctor$1(rootElement, Paperview.Common.Ui.Helpers.UiExtensions.GetContainer(new Paperview.Common.Ui.DropDownPublishersListPane.ctor(this._publishers, 
            this._selectPublisherAction, 0 /* Idiom.Phone */)), "Publisher", 0 /* Idiom.Phone */);
        this._publisherPane = new Paperview.Common.Ui.PublisherPane.ctor$1(rootElement, 0 /* Idiom.Phone */);
    };
    $t.ctor.prototype = $p;
});
$d.define(Paperview.DocumentTypes.Album.Program, null, function($t, $p) {
    $t.Run = function Program_Run() { // HTML body.onload event entry point, see index.html
        System.Console.WriteLine$10("Hello DuoCode");

        var el = document.getElementById("content");
        el.innerHTML = String.Empty;
        var albumApplication = new Paperview.DocumentTypes.Album.AlbumApplication.ctor(el);
    };
});
return $asm;
})();
//# sourceMappingURL=Paperview.DocumentTypes.Album.js.map
