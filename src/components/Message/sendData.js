import { GoogleSpreadsheet } from "google-spreadsheet";

// Config variables
const SPREADSHEET_ID = '1nuIsN4UIo4o7_pxiar0TvBfrNIGPZ_SMQHXEFkP4Ltg';
const SHEET_ID = '0';
const CLIENT_EMAIL = 'demo-111@macro-landing-290111.iam.gserviceaccount.com';
const PRIVATE_KEY = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtvrKrDzb3NyUT\nXA3TKuHB5wNJ6vF20f79X2cxrtLqi2cZIdn7pDW2ZEXrH6Oi98xwC1nI3geh4tpa\nIAS0Xmu5USEi+GE9Y2LjaF0nY8SPXZhwSqgKE0VbAQCdakrv9yYw2jRARm1JGACX\nbbGA3k7WymQKhKdrVQk5JeALuk+WoRa4+aZbaMlt577vsuhtDCfTqMPXB8Inse9j\nERngIKcCnlyqJwCrHUVvIMLLx/TkLiip+Rhd+y/D1PjtBi0/gYtEX1RmW4O1LXAy\nRYI3CWEd64xqsl9sRKVeUg52uYw/V9hkbbAMJdLXnGuAAkpg446Z9ImxfVw8pfPT\nQunlfzfPAgMBAAECggEARwAWaFQD3LuiwYoNNj2gWwpJ7EN/4FQJdUYu1/0+wM0t\n2PXd6/kbYAkTD3Xy+25zE1h4HN8q1EtteoX6FjE9qVHPjkhdCGacaxzjcGzTTtjr\nKfxANjnQzlMXCrz8mZpwd2c8EgYVs9iEqV0Qu/5czmaPwkKaXgC2j618JJ7C1mUY\n7OWBRyWgnJ4B88tZmRyq0H4GfvvhLPgHrhvRAlXfqqr8vwW7zoPutaWkMf2SMnd7\nBSWjRUPWbn7q4yEo54zDDQFTWC680Fgc31DkFsOFPXvRQM8plqh3ScotfFEkAfte\nspnKcHlcDlBGPzi6+cadJWX7mhPmv1OmsTE/72oJvQKBgQDyJyVjnOBVCx4oqOzx\ne+U7m6wsy9P7pB4nH8hsNvTIugl5f4H5l1XrhQluwKcnJQx+2hnfpDLGK+xtynRT\nid7gaKKWYeU6RbVuWnYaDrjn3sEdOwfAdCz1BxaHULAcGu+FqiCBOyRMYNhOY1c9\nZ86CjF69pp4+SkBP/RYyr/XmEwKBgQC3riIuxQY93pelbdoKCUCKhp6ETu/2qc0U\n0D5Ko65RVourL2Z9lxJkBuN35IM+W+FhWZqOdH/XA9axiE3R4jOwN+K5yZ34bGpZ\nr0OMMpWTDQAcPPkjY6+wbxPO7kO+bYxR7NHvhSJ1vm4nwXta32bLhW/5BCbTA1Ew\nTOpEJJ9O1QKBgQCu9CWJYPCbwRqbGeGHX5JxjLnK68FO0HaQod/2f4Y/+FmcFMnd\ngL+tGEOGZ17dY2ExzXZgJIwird12PY3qRXRoAnFl4Xjyrya0gltN3FEwBbrU2a9y\nFv3cUrCuN1fmFnfzxMUTWZ2SKW5exFtlnDiSDcTtlRJDwvXQVPTSzlsFTQKBgQCS\nDGWlpoeV/j26DiTGwiCNhQjZzyJCkTU+DW7aTle22QfpL6FgzxSScF/B3vL0TH5i\nt6qLBtr3jlfRhb3K2v+aaHVgoI15EEtn0FH3UelYqYei7GB04Ti7Izcu3IkFC3n9\nUj6DIusJkEdqWQ/Ka8QCo7Eq4UA1nHeb3iyPzkbVmQKBgEWW6bVraGp7P9U5psZP\nUpPKg2lDPDAfu2LEk12YMh5+Pwd1R0Jab+gnsjwls8wBrs8JSQM0HmRJ4hYVcFLW\nvDvcFD7cwutt7TONFhgt9YW9J2+fGa3PgroT83ZMuDoyXVhCH+AkV34kCiNUUJpa\nXR85tsamm8aOCSRopPAR/Emh';

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export default async (row) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();

        const sheet = doc.sheetsById[SHEET_ID];
        const result = await sheet.addRow(row);
    } catch (e) {
        console.error('Error: ', e);
    }
};
