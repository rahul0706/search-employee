DELETE FROM employee;



INSERT INTO employee
            (id,
             NAME,
             JOBTITLE,
             AGE,
             startdate,
             enddate)
VALUES      (101,
             'Amit Kumar',
             'Developer',
             30,
             TO_DATE('16/12/2016', 'DD/MM/YYYY'),
             TO_DATE('16/12/2020', 'DD/MM/YYYY'));

INSERT INTO employee
            (id,
             NAME,
             JOBTITLE,
             AGE,
             startdate,
             enddate)
VALUES      (102,
             'Sakhshi Goyal',
             'Lead',
             40,
             TO_DATE('17/12/2010', 'DD/MM/YYYY'),
             TO_DATE('17/12/2016', 'DD/MM/YYYY'));
INSERT INTO employee
            (id,
             NAME,
             JOBTITLE,
             AGE,
             startdate,
             enddate)
VALUES      (103,
             'Lalit Singh',
             'Developer',
             35,
             TO_DATE('17/12/2013', 'DD/MM/YYYY'),
             TO_DATE('17/12/2016', 'DD/MM/YYYY'));
INSERT INTO employee
            (id,
             NAME,
             JOBTITLE,
             AGE,
             startdate,
             enddate)
VALUES      (104,
             'Dinesh Sharma',
             'Senior Developer',
             39,
             TO_DATE('17/12/2012', 'DD/MM/YYYY'),
             TO_DATE('17/12/2016', 'DD/MM/YYYY'));             