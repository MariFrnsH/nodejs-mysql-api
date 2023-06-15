import  express  from 'express'
import employeesRoutes from './routers/employees.routers.js'
import indexRoutes from './routers/index.routers.js'


const app = express();


app.use(express.json())

app.use("/", indexRoutes)
app.use('/api', employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;