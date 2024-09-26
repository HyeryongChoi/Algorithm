/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    // local name @ domain name
    // . will be removed
    // after + will be ignored
    const result = new Set();

    emails.forEach(email => {
        let [localName, domainName] = email.split('@');

        localName = localName.replaceAll('.', '');
        localName = localName.split('+')[0];

        result.add(localName+'@'+domainName);
    });

    return result.size;
};