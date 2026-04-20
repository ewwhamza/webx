<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    // Retrieve the 'name' parameter sent by the AJAX GET request
    String name = request.getParameter("name");

    // Perform a simple check and generate the response
    if (name != null && !name.trim().isEmpty()) {
        out.print("Hello, " + name + "! Your AJAX request to Tomcat 10 was successful.");
    } else {
        out.print(""); 
    }
%>