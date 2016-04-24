/*!
* Paperview.Common, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
*
* Generated by DuoCode Compiler 2.0.1542.0 [Trial]
*/
(function Paperview_Common() {
"use strict";
var $asm = {
    fullName: "Paperview.Common",
    anonymousTypes: [],
    types: [],
    $getAttrs: function() { return [new System.Reflection.AssemblyTitleAttribute.ctor("Paperview.Common"), new System.Reflection.AssemblyDescriptionAttribute.ctor(""), new System.Reflection.AssemblyConfigurationAttribute.ctor(""), new System.Reflection.AssemblyCompanyAttribute.ctor(""), new System.Reflection.AssemblyProductAttribute.ctor("Paperview.Common"), new System.Reflection.AssemblyCopyrightAttribute.ctor("Copyright \xA9  2015"), new System.Reflection.AssemblyTrademarkAttribute.ctor(""), new System.Reflection.AssemblyCultureAttribute.ctor(""), new System.Reflection.AssemblyVersionAttribute.ctor("1.0.0.0"), new System.Reflection.AssemblyFileVersionAttribute.ctor("1.0.0.0"), new DuoCode.Runtime.CompilerAttribute.ctor("2.0.1542.0")]; }
};
var $g = (typeof(global) !== "undefined" ? global : (typeof(window) !== "undefined" ? window : self));
var Paperview = $g.Paperview = $g.Paperview || {};
Paperview.Common = Paperview.Common || {};
var $d = DuoCode.Runtime;
$d.$assemblies["Paperview.Common"] = $asm;
Paperview.Common.Document = $d.declare("Paperview.Common.Document", 0, $asm);
Paperview.Common.Legal = $d.declare("Paperview.Common.Legal", 0, $asm);
Paperview.Common.Microformat = $d.declare("Paperview.Common.Microformat", 0, $asm);
Paperview.Common.Publisher = $d.declare("Paperview.Common.Publisher", 0, $asm);
$d.define(Paperview.Common.Document, null, function($t, $p) {
    $t.$intfs = [Paperview.Interfaces.IDocument];
    $t.$ator = function() {
        this._mfid = null;
        this._docId = null;
        this._presId = null;
        this.MicroformatIconBase64 = null;
        this.LanguageAvailability = null;
        this.LanguageDefault = null;
        this.MicroformatName = null;
        this.MicroformatDescription = null;
        this.Microformat = null;
    };
    $t.ctor = function Document() {
        $t.$baseType.ctor.call(this);
    };
    $t.ctor.prototype = $p;
    $p.get_DocumentId = function Document_get_DocumentId() {
        return this._docId;
    };
    $p.set_DocumentId = function Document_set_DocumentId(value) {
        this._docId = value.toLowerCase();
        return value;
    };
    $p.get_MicroformatId = function Document_get_MicroformatId() {
        return this._mfid;
    };
    $p.set_MicroformatId = function Document_set_MicroformatId(value) {
        this._mfid = value.toLowerCase();
        return value;
    };
    $p.get_PresentationId = function Document_get_PresentationId() {
        return this._presId;
    };
    $p.set_PresentationId = function Document_set_PresentationId(value) {
        this._presId = value.toLowerCase();
        return value;
    };
    $p.get_MicroformatIconBase64 = function Document_get_MicroformatIconBase64() { return this.MicroformatIconBase64; };
    $p.set_MicroformatIconBase64 = function Document_set_MicroformatIconBase64(value) { this.MicroformatIconBase64 = value;return value; };
    $p.get_LanguageAvailability = function Document_get_LanguageAvailability() { return this.LanguageAvailability; };
    $p.set_LanguageAvailability = function Document_set_LanguageAvailability(value) { this.LanguageAvailability = value;return value; };
    $p.get_LanguageDefault = function Document_get_LanguageDefault() { return this.LanguageDefault; };
    $p.set_LanguageDefault = function Document_set_LanguageDefault(value) { this.LanguageDefault = value;return value; };
    $p.get_MicroformatName = function Document_get_MicroformatName() { return this.MicroformatName; };
    $p.set_MicroformatName = function Document_set_MicroformatName(value) { this.MicroformatName = value;return value; };
    $p.get_MicroformatDescription = function Document_get_MicroformatDescription() { return this.MicroformatDescription; };
    $p.set_MicroformatDescription = function Document_set_MicroformatDescription(value) { this.MicroformatDescription = value;return value; };
    $p.get_Microformat = function Document_get_Microformat() { return this.Microformat; };
    $p.set_Microformat = function Document_set_Microformat(value) { this.Microformat = value;return value; };
    $p.Paperview$Interfaces$IDocument$get_DocumentId = $p.get_DocumentId;
    $p.Paperview$Interfaces$IDocument$set_DocumentId = $p.set_DocumentId;
    $p.Paperview$Interfaces$IDocument$get_PresentationId = $p.get_PresentationId;
    $p.Paperview$Interfaces$IDocument$set_PresentationId = $p.set_PresentationId;
    $p.Paperview$Interfaces$IDocument$get_MicroformatId = $p.get_MicroformatId;
    $p.Paperview$Interfaces$IDocument$set_MicroformatId = $p.set_MicroformatId;
    $p.Paperview$Interfaces$IDocument$get_MicroformatIconBase64 = $p.get_MicroformatIconBase64;
    $p.Paperview$Interfaces$IDocument$set_MicroformatIconBase64 = $p.set_MicroformatIconBase64;
    $p.Paperview$Interfaces$IDocument$get_LanguageAvailability = $p.get_LanguageAvailability;
    $p.Paperview$Interfaces$IDocument$set_LanguageAvailability = $p.set_LanguageAvailability;
    $p.Paperview$Interfaces$IDocument$get_LanguageDefault = $p.get_LanguageDefault;
    $p.Paperview$Interfaces$IDocument$set_LanguageDefault = $p.set_LanguageDefault;
    $p.Paperview$Interfaces$IDocument$get_MicroformatName = $p.get_MicroformatName;
    $p.Paperview$Interfaces$IDocument$set_MicroformatName = $p.set_MicroformatName;
    $p.Paperview$Interfaces$IDocument$get_MicroformatDescription = $p.get_MicroformatDescription;
    $p.Paperview$Interfaces$IDocument$set_MicroformatDescription = $p.set_MicroformatDescription;
});
$d.define(Paperview.Common.Legal, null, function($t, $p) {
    $t.$intfs = [Paperview.Interfaces.ILegal];
    $t.ctor = function Legal() {
        $t.$baseType.ctor.call(this);
    };
    $t.ctor.prototype = $p;
});
$d.define(Paperview.Common.Microformat, null, function($t, $p) {
    $t.$intfs = [Paperview.Interfaces.IMicroformat];
    $t.$ator = function() {
        this._mfid = null;
        this.Name = null;
        this.Description = null;
        this.LanguageAvailability = null;
        this.LanguageDefault = null;
        this.Author = null;
        this.AuthorEmailAddress = null;
        this.AuthorWebAddress = null;
        this.Derivation = null;
    };
    $t.ctor = function Microformat() {
        $t.$baseType.ctor.call(this);
    };
    $t.ctor.prototype = $p;
    $p.get_Id = function Microformat_get_Id() {
        return this._mfid;
    };
    $p.set_Id = function Microformat_set_Id(value) {
        this._mfid = value.toLowerCase();
        return value;
    };
    $p.get_Name = function Microformat_get_Name() { return this.Name; };
    $p.set_Name = function Microformat_set_Name(value) { this.Name = value;return value; };
    $p.get_Description = function Microformat_get_Description() { return this.Description; };
    $p.set_Description = function Microformat_set_Description(value) { this.Description = value;return value; };
    $p.get_LanguageAvailability = function Microformat_get_LanguageAvailability() { return this.LanguageAvailability; };
    $p.set_LanguageAvailability = function Microformat_set_LanguageAvailability(value) { this.LanguageAvailability = value;return value; };
    $p.get_LanguageDefault = function Microformat_get_LanguageDefault() { return this.LanguageDefault; };
    $p.set_LanguageDefault = function Microformat_set_LanguageDefault(value) { this.LanguageDefault = value;return value; };
    $p.get_Author = function Microformat_get_Author() { return this.Author; };
    $p.set_Author = function Microformat_set_Author(value) { this.Author = value;return value; };
    $p.get_AuthorEmailAddress = function Microformat_get_AuthorEmailAddress() { return this.AuthorEmailAddress; };
    $p.set_AuthorEmailAddress = function Microformat_set_AuthorEmailAddress(value) { this.AuthorEmailAddress = value;return value; };
    $p.get_AuthorWebAddress = function Microformat_get_AuthorWebAddress() { return this.AuthorWebAddress; };
    $p.set_AuthorWebAddress = function Microformat_set_AuthorWebAddress(value) { this.AuthorWebAddress = value;return value; };
    $p.get_Derivation = function Microformat_get_Derivation() { return this.Derivation; };
    $p.set_Derivation = function Microformat_set_Derivation(value) { this.Derivation = value;return value; };
    $p.Paperview$Interfaces$IMicroformat$get_Id = $p.get_Id;
    $p.Paperview$Interfaces$IMicroformat$set_Id = $p.set_Id;
    $p.Paperview$Interfaces$IMicroformat$get_Name = $p.get_Name;
    $p.Paperview$Interfaces$IMicroformat$set_Name = $p.set_Name;
    $p.Paperview$Interfaces$IMicroformat$get_Description = $p.get_Description;
    $p.Paperview$Interfaces$IMicroformat$set_Description = $p.set_Description;
    $p.Paperview$Interfaces$IMicroformat$get_LanguageAvailability = $p.get_LanguageAvailability;
    $p.Paperview$Interfaces$IMicroformat$set_LanguageAvailability = $p.set_LanguageAvailability;
    $p.Paperview$Interfaces$IMicroformat$get_LanguageDefault = $p.get_LanguageDefault;
    $p.Paperview$Interfaces$IMicroformat$set_LanguageDefault = $p.set_LanguageDefault;
    $p.Paperview$Interfaces$IMicroformat$get_Author = $p.get_Author;
    $p.Paperview$Interfaces$IMicroformat$set_Author = $p.set_Author;
    $p.Paperview$Interfaces$IMicroformat$get_AuthorEmailAddress = $p.get_AuthorEmailAddress;
    $p.Paperview$Interfaces$IMicroformat$set_AuthorEmailAddress = $p.set_AuthorEmailAddress;
    $p.Paperview$Interfaces$IMicroformat$get_Derivation = $p.get_Derivation;
    $p.Paperview$Interfaces$IMicroformat$set_Derivation = $p.set_Derivation;
});
$d.define(Paperview.Common.Publisher, null, function($t, $p) {
    $t.$intfs = [Paperview.Interfaces.IPublisher];
    $t.$ator = function() {
        this.Id = null;
        this.Name = null;
        this.Email = null;
        this.Url = null;
    };
    $t.ctor = function Publisher() {
        $t.$baseType.ctor.call(this);
    };
    $t.ctor.prototype = $p;
    $p.get_Id = function Publisher_get_Id() { return this.Id; };
    $p.set_Id = function Publisher_set_Id(value) { this.Id = value;return value; };
    $p.get_Name = function Publisher_get_Name() { return this.Name; };
    $p.set_Name = function Publisher_set_Name(value) { this.Name = value;return value; };
    $p.get_Email = function Publisher_get_Email() { return this.Email; };
    $p.set_Email = function Publisher_set_Email(value) { this.Email = value;return value; };
    $p.get_Url = function Publisher_get_Url() { return this.Url; };
    $p.set_Url = function Publisher_set_Url(value) { this.Url = value;return value; };
    $p.Paperview$Interfaces$IPublisher$get_Id = $p.get_Id;
    $p.Paperview$Interfaces$IPublisher$set_Id = $p.set_Id;
    $p.Paperview$Interfaces$IPublisher$get_Name = $p.get_Name;
    $p.Paperview$Interfaces$IPublisher$set_Name = $p.set_Name;
    $p.Paperview$Interfaces$IPublisher$get_Email = $p.get_Email;
    $p.Paperview$Interfaces$IPublisher$set_Email = $p.set_Email;
    $p.Paperview$Interfaces$IPublisher$get_Url = $p.get_Url;
    $p.Paperview$Interfaces$IPublisher$set_Url = $p.set_Url;
});
return $asm;
})();
//# sourceMappingURL=Paperview.Common.js.map
