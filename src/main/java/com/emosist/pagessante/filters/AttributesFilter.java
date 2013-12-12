package com.emosist.pagessante.filters;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class AttributesFilter implements Filter {
    private FilterConfig filterConfig;

    @Override
    public void init( FilterConfig filterConfig ) throws ServletException {
        this.filterConfig = filterConfig;
    }

    @Override
    public void doFilter( final ServletRequest request,
            final ServletResponse response,
            FilterChain chain )
            throws java.io.IOException, javax.servlet.ServletException {

        request.setAttribute( "requete", request );
        request.setAttribute( "version", this.filterConfig.getInitParameter( "version" ) );
        // request.setAttribute( "datedujour", new Date() );

        chain.doFilter( request, response );
    }

    @Override
    public void destroy() {
    }

}
