package vacinacao;

import org.apache.commons.dbcp.BasicDataSource;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.LocalSessionFactoryBuilder;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.ResourceBundle;

import vacinacao.modulos.agenda.negocio.Agenda;
import vacinacao.modulos.alergia.negocio.Alergia;
import vacinacao.modulos.usuario.negocio.Usuario;
import vacinacao.modulos.vacina.negocio.Vacina;

@Configuration
@ComponentScan("vacinacao")
@EnableTransactionManagement
public class ApplicationContextConfig {

  private ResourceBundle _resourceBundle;

  private ResourceBundle getJDBCProps() {
    if (_resourceBundle == null) {
      _resourceBundle = ResourceBundle.getBundle("jdbc");
    }

    return _resourceBundle;
  }

  @Bean(name = "dataSource")
  public DataSource getDataSource() {

    ResourceBundle resourceBundle = getJDBCProps();

    BasicDataSource dataSource = new BasicDataSource();
    dataSource.setDriverClassName(resourceBundle.getString("jdbc.driverClassName"));
    dataSource.setUrl(resourceBundle.getString("jdbc.url"));
    dataSource.setUsername(resourceBundle.getString("jdbc.user"));
    dataSource.setPassword(resourceBundle.getString("jdbc.pass"));

    return dataSource;
  }

  @Autowired
  @Bean(name = "sessionFactory")
  public SessionFactory getSessionFactory(DataSource dataSource) {

    ResourceBundle resourceBundle = getJDBCProps();

    LocalSessionFactoryBuilder sessionFactory = new LocalSessionFactoryBuilder(dataSource);

    sessionFactory.setProperty("hibernate.dialect", resourceBundle.getString("hibernate.dialect"));
    sessionFactory.setProperty("hibernate.show_sql", resourceBundle.getString("hibernate.show_sql"));
    sessionFactory.setProperty("hibernate.hbm2ddl.auto", resourceBundle.getString("hibernate.hbm2ddl.auto"));

    sessionFactory.addAnnotatedClass(Usuario.class);
    sessionFactory.addAnnotatedClass(Agenda.class);
    sessionFactory.addAnnotatedClass(Vacina.class);
    sessionFactory.addAnnotatedClass(Alergia.class);

    return sessionFactory.buildSessionFactory();
  }
}
