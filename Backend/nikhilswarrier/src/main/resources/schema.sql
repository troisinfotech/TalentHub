CREATE TABLE user
(
   username text not null,
   userid int primary key not null
);
CREATE TABLE role
(
   roleid int primary key not null,
   rolename text not null,
   userid int not null,
   foreign key (userid) references user (userid)
);
CREATE TABLE permission
(
   permissionid int primary key not null,
   roleid int not null,
   permissionname text not null,
   foreign key (roleid) references role (roleid)
);
CREATE TABLE organization
(
   organizationid int primary key not null,
   organizationname text not null,
   userid int not null,
   foreign key (userid) references user (userid)
);
