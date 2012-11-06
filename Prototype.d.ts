/// <reference path="Enumerable.d.ts" />

interface PrototypeBrowser {
	Gecko: bool;
	IE: bool;
	MobileSafari: bool;
	Opera: bool;
	WebKit: bool;
}

interface PrototypeBrowserFeatures {
	ElementExtensions: bool;
	SelectorsAPI: bool;
	SpecificElementExtensions: bool;
	XPath: bool;
}

interface PrototypeSelector {
	extendElement(element: Element): Element;

	extendElements(elements: Element[]): Enumerable;

	find(elements: Element[], expresion, index): Element;

	match(element, expresion): bool;

	select(expresion, root): Element[];
}

interface Prototype {
	
	emptyFunction(args: any): any;

	K(args: any): any;

	Browser: PrototypeBrowser;

	BrowserFeatures: PrototypeBrowserFeatures;

	Selector: PrototypeSelector;
}

declare var Prototype: Prototype;
