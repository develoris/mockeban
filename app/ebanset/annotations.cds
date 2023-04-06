using EbanService as service from '../../srv/eban_srv';

annotate service.ebanSet with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : Bnfpo,
        },
        {
            $Type : 'UI.DataField',
            Value : Banfn,
        },
        {
            $Type : 'UI.DataField',
            Value : Lifnr,
        },
        {
            $Type : 'UI.DataField',
            Value : Bednr,
        },
        {
            $Type : 'UI.DataField',
            Value : Blckt,
        },
    ]
);
annotate service.ebanSet with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Banfn,
            },
            {
                $Type : 'UI.DataField',
                Value : Bnfpo,
            },
            {
                $Type : 'UI.DataField',
                Value : Lifnr,
            },
            {
                $Type : 'UI.DataField',
                Value : Bednr,
            },
            {
                $Type : 'UI.DataField',
                Value : Blckt,
            },
            {
                $Type : 'UI.DataField',
                Value : Bsakz,
            },
            {
                $Type : 'UI.DataField',
                Value : Eprofile,
            },
            {
                $Type : 'UI.DataField',
                Value : Frggr,
            },
            {
                $Type : 'UI.DataField',
                Value : Zzfgpibsubsyst,
            },
            {
                $Type : 'UI.DataField',
                Value : Waers,
            },
            {
                $Type : 'UI.DataField',
                Value : Lfdat,
            },
            {
                $Type : 'UI.DataField',
                Value : Loekz,
            },
            {
                $Type : 'UI.DataField',
                Value : ZzfgpIbsorig,
            },
            {
                $Type : 'UI.DataField',
                Value : Bsart,
            },
            {
                $Type : 'UI.DataField',
                Value : Frgdt,
            },
            {
                $Type : 'UI.DataField',
                Value : Statu,
            },
            {
                $Type : 'UI.DataField',
                Value : Bstyp,
            },
            {
                $Type : 'UI.DataField',
                Value : Estkz,
            },
            {
                $Type : 'UI.DataField',
                Value : Preis,
            },
            {
                $Type : 'UI.DataField',
                Value : Erdat,
            },
            {
                $Type : 'UI.DataField',
                Value : Frgkz,
            },
            {
                $Type : 'UI.DataField',
                Value : Peinh,
            },
            {
                $Type : 'UI.DataField',
                Value : Badat,
            },
            {
                $Type : 'UI.DataField',
                Value : Emlif,
            },
            {
                $Type : 'UI.DataField',
                Value : Frgzu,
            },
            {
                $Type : 'UI.DataField',
                Value : Frgst,
            },
            {
                $Type : 'UI.DataField',
                Value : Ekgrp,
            },
            {
                $Type : 'UI.DataField',
                Value : Ernam,
            },
            {
                $Type : 'UI.DataField',
                Value : Afnam,
            },
            {
                $Type : 'UI.DataField',
                Value : Txz01,
            },
            {
                $Type : 'UI.DataField',
                Value : Matnr,
            },
            {
                $Type : 'UI.DataField',
                Value : Werks,
            },
            {
                $Type : 'UI.DataField',
                Value : Lgort,
            },
            {
                $Type : 'UI.DataField',
                Value : Matkl,
            },
            {
                $Type : 'UI.DataField',
                Value : Menge,
            },
            {
                $Type : 'UI.DataField',
                Value : Meins,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
