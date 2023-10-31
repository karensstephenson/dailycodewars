// Use conditionals to return the proper message:
// case 	                return
// name equals owner 	    'Hello boss'
// otherwise 	            'Hello guest'

function message(name, owner) {
    return name === owner ? "Hello boss" : "Hello guest"
}