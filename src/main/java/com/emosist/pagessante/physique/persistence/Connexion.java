package com.emosist.pagessante.physique.persistence;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

/**
 * @author Damien Chesneau <contact@damienchesneau.fr>
 */
class Connexion {

    private static EntityManagerFactory emf;
    private static EntityManager em;
    private static EntityTransaction tx;

    protected static EntityManager getPersistance() throws Exception {
        emf = Persistence.createEntityManagerFactory("com.emosist_PageSante_Referenciel_Metier_jar_1.0-SNAPSHOTPU");
        em = emf.createEntityManager();
        tx = em.getTransaction();
        tx.begin();
        return em;
    }

    protected static void disconect(EntityManager manager) throws Exception {
        em = manager;
        tx.commit();
        em.close();
        emf.close();
    }
}
