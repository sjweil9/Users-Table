$(document).ready(function() {
    $('form').submit(function(){
        $('table').append("<tr></tr>");
        var first_name = "<td>" + $("input[name='first_name']").val() + "</td>";
        $('tbody tr:last-child').append(first_name);
        var last_name = "<td>" + $("input[name='last_name']").val() + "</td>";
        $('tbody tr:last-child').append(last_name);
        var email = "<td>" + $("input[name='email_address']").val() + "</td>";
        $('tbody tr:last-child').append(email);
        var contact = "<td>" + $("input[name='contact_num']").val() + "</td>";
        $('tbody tr:last-child').append(contact);
        return false;
    });
})