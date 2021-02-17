/// <reference path="Enumerable.d.ts" />

interface PrototypeBrowser {
	Gecko: boolean;
	IE: boolean;
	MobileSafari: boolean;
	Opera: boolean;
	WebKit: boolean;
}

interface PrototypeBrowserFeatures {
	ElementExtensions: boolean;
	SelectorsAPI: boolean;
	SpecificElementExtensions: boolean;
	XPath: boolean;
}

interface PrototypeSelector {
	extendElement(element: Element): Element;

	extendElements(elements: Element[]): Enumerable;

	find(elements: Element[], expresion, index): Element;

	match(element, expresion): boolean;

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

declare class Form {
	serialize(div: PrototypeSelector): string;
}

declare function $$(selector: string): HTMLElement[];
