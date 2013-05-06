interface AjaxPeriodicalUpdater {
	start(): void;
	
	stop(): void;
}

interface AjaxRequest {
	getHeader(name: string): string;
	
	success(): bool;
}

interface AjaxResponders {
	register(responder: object): void;
	
	unregister(responder: object): void;
}

interface AjaxResponse {
	getAllHeaders(): string;
	
	getAllResponseHeaders(): string;
	
	getHeader(name: string): string;
	
	getResponseHeader(name: string): string;
	
	headerJSON: object;
	
	readyState: number;
	
	request: AjaxRequest;
	
	responseJSON: object;
	
	responseText: string;
	
	responseXML: Document;
	
	status: number;
	
	statusText: string;
	
	trasport: XMLHttpRequest;
}

/*
interface AjaxUpdater {
	
}
AjaxUpdater is a sub class of AjaxRequest
*/
interface Ajax {
	
	PeriodicalUpdater: AjaxPeriodicalUpdater;
	
	Request: AjaxRequest;
	
	Responders: AjaxResponders;
	
	Response: AjaxResponse;
	
	Updater: AjaxRequest;
	
	activeRequestCount: number;
	
}