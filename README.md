## PRISMA with PostgreSQL

######  Get Started
```
yarn install @prisma/cli --save-dev
npx prisma init
yarn prisma migrate dev --name init# prisma_postgre-sql
```


###### for generate and migrate
```
npx prisma generate
npx prisma migrate dev
```

###### Execute command script:
```
npx ts-node my-query/users/Create.ts
npx ts-node my-query/users/Get.ts
```
