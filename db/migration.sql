drop table if exists oauth\_client\_details;  
create table oauth\_client\_details (  
  client\_id VARCHAR(255) PRIMARY KEY,  
  resource\_ids VARCHAR(255),  
  client\_secret VARCHAR(255),  
  scope VARCHAR(255),  
  authorized\_grant\_types VARCHAR(255),  
  web\_server\_redirect\_uri VARCHAR(255),  
  authorities VARCHAR(255),  
  access\_token\_validity INTEGER,  
  refresh\_token\_validity INTEGER,  
  additional\_information VARCHAR(4096),  
  autoapprove VARCHAR(255)  
);  

drop table if exists oauth\_client\_token;  
create table oauth\_client\_token (  
  token\_id VARCHAR(255),  
  token LONG VARBINARY,  
  authentication\_id VARCHAR(255) PRIMARY KEY,  
  user\_name VARCHAR(255),  
  client\_id VARCHAR(255)  
);  

drop table if exists oauth\_access\_token;  
create table oauth\_access\_token (  
  token\_id VARCHAR(255),  
  token LONG VARBINARY,  
  authentication\_id VARCHAR(255) PRIMARY KEY,  
  user\_name VARCHAR(255),  
  client\_id VARCHAR(255),  
  authentication LONG VARBINARY,  
  refresh\_token VARCHAR(255)  
);  

drop table if exists oauth\_refresh\_token;  
create table oauth\_refresh\_token (  
  token\_id VARCHAR(255),  
  token LONG VARBINARY,  
  authentication LONG VARBINARY  
);  

drop table if exists oauth\_code;  
create table oauth\_code (  
  code VARCHAR(255), authentication LONG VARBINARY  
);  

SET SQL\_MODE='ALLOW\_INVALID\_DATES';  

drop table if exists oauth\_approvals;  
create table oauth\_approvals (  
    userId VARCHAR(255),  
    clientId VARCHAR(255),  
    scope VARCHAR(255),  
    status VARCHAR(10),  
    expiresAt TIMESTAMP,  
    lastModifiedAt TIMESTAMP  
);  

drop table if exists ClientDetails;  
create table ClientDetails (  
  appId VARCHAR(255) PRIMARY KEY,  
  resourceIds VARCHAR(255),  
  appSecret VARCHAR(255),  
  scope VARCHAR(255),  
  grantTypes VARCHAR(255),  
  redirectUrl VARCHAR(255),  
  authorities VARCHAR(255),  
  access\_token\_validity INTEGER,  
  refresh\_token\_validity INTEGER,  
  additionalInformation VARCHAR(4096),  
  autoApproveScopes VARCHAR(255)  
);
