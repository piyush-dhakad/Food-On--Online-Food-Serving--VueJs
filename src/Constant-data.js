const BASEPATH = "https://int-apigw.inh0.net/icl/api/v1.1/recipes/search?country=US&excludingState=pending&q=&from=0&size=15&sort=lastMod"
const CONFIG = {
    headers: {
        Accept: 'application/json',
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im42TXBXamhzTVdNVEpHcUY3MjN6OCJ9.eyJpc3MiOiJodHRwczovL2Rldi1pbm5pdC5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjFkZDM2MmEwMzFhYzAwMjFlZTM0MjExIiwiYXVkIjpbImh0dHBzOi8vYXBpLmlubml0LmNvbS8iLCJodHRwczovL2Rldi1pbm5pdC5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjYzNTk2NDM5LCJleHAiOjE2NjYxODg0MzksImF6cCI6IjlUaTQ3YnlmUnhxMkZ1NzFRdDFObm9GbDRkNzZMSFRlIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWNpcGUuam9ldjpyZWFkIHJlY2lwZS5qb2V2OndyaXRlIHJlY2lwZS5qb2V2OnFhIHByb2R1Y3Quam9ldjpyZWFkIHByb2R1Y3Quam9ldjp3cml0ZSBwcm9kdWN0LmpvZXY6cWEifQ.bT3mxM4p2ag48HwN-aUExESTXFiM-RbCeIwEbBVwXaHhSDFqVTsKkar5OjuKs9XU5p5FracOq4D7MnE3Qbt4A3Bq-c_nxjtF_dSFb9hjb4Jx_TGK6fAlRUEDyU71L8odnOZQL8cZcmxS5x6TQ8AUSQjaVsdNUwsGRYYa_BYd_L9-1bT-R98PTOEz7j8nkmpbGclTR_MWOGPJti5dLWDEottWDGd0ycj9EmU50k2DaoUuIQ4iJq_7noCzl0bhbIx0CtkZVYE1A9gr4nevlT9q69YvIA-Vtq6jADNnjcU3Q-9JZweF9EPKEAHeAnhGCSmD_dJg3tepHPBV9OCbEJceAQ`,
        'Content-Type': 'application/json',

    }
}

export default {

    BASEPATH,
    CONFIG
}