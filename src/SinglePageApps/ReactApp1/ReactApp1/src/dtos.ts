/* Options:
Date: 2017-06-02 03:54:55
Version: 4.59
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:52753

GlobalNamespace: dtos
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export module dtos
{

    export interface IReturnVoid
    {
        createResponse() : void;
    }

    export interface IReturn<T>
    {
        createResponse() : T;
    }

    export class HelloResponse
    {
        result: string;
    }

    // @Route("/hello")
    // @Route("/hello/{Name}")
    export class Hello implements IReturn<HelloResponse>
    {
        name: string;
        createResponse() { return new HelloResponse(); }
        getTypeName() { return "Hello"; }
    }

}
