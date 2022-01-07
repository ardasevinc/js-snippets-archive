function makePerson(first, last) {
    return {
        first: first,
        last: last,
        fullName: function() {
            return this.first + ' ' + this.last;
            
        },
        fullNameRev: function() {
            return this.last + ', ' + this.first;
        },
    };
}

var s = makePerson("archaic", "epiphany");
s.fullName();
s.fullNameRev();
