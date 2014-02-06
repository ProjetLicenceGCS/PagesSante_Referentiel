package com.emosist.pagessante.filters;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

/**
 *
 * @author Morin Alexandre
 */
public class AttributesFilter implements Filter {

    private FilterConfig filterConfig;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        this.filterConfig = filterConfig;
    }

    @Override
    public void doFilter(final ServletRequest request,
            final ServletResponse response,
            FilterChain chain)
            throws java.io.IOException, javax.servlet.ServletException {
        try {
            request.setAttribute("requete", request);
            request.setAttribute("version", this.filterConfig.getInitParameter("version"));
        // request.setAttribute( "datedujour", new Date() );

            chain.doFilter(request, response);
        } catch (Exception e) {
            //Il y a un problème mais on en a rien a foutre
        }

    }

    @Override
    public void destroy() {
    }

}
