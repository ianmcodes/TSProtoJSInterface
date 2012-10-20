interface Enumerable {
	all(iterator, context) => bool;
	any(iterator, context) => bool;
	collect(iterator, context) => any[];
	detect(iterator, context) => Element;
	each(iterator, context) => Enumerable;
	eachSlice(number, iterator, context) => Enumerable;
	entries() => any[];
	every(iterator, context) => bool;
	filter(iterator, context) => any[];
	find(iterator, context) => Element;
	findAll(iterator, context) => any[];
	grep(filter, iterator, context) => any[];
	include(object) => bool;
	inGroupsOf(number, fillWith) => any[];
	inject(memo, iterator, context) => any[];
	inspect() => String;
	invoke(method) => any[];
	map(iterator, context) => any[];
	max(iterator, context) => any;
	member(object) => bool;
	min(iterator, context) => any;
	partition(iterator, context) => any[];
	pluck(property) => any[];
	reject(iterator, context) => any[];
	select(iterator, context) => any[];
	size() => number;
	some(iterator, context) => bool;
	sortBy(iterator, context) => any[];
	toArray() => any[];
	zip(args: any[]) => any[];
}

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
	extendElement(element: Element) => Element;

	extendElements(elements: Element[]) => Enumerable;

	find(elements: Element[], expresion, index) => Element;

	match(element, expresion) => bool;

	select(expresion, root) => Element[];
}

interface Prototype {
	
	emptyFunction(args: any) => any;

	K(args: any) => any;

	Browser: PrototypeBrowser;

	BrowserFeatures: PrototypeBrowserFeatures;

	Selector: PrototypeSelector;
}