import React, { useEffect, useState } from 'react';
import {
    Card,
    Stack,
    Container,
    Typography,
    Button,
} from '@mui/material';
import { Link, Link as RouterLink } from 'react-router-dom';
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import AdDepartmentListToolBar from '../../../sections/@dashboard/admin/departments/AdDepartmentListToolBar';
import Scrollbar from './../../../components/Scrollbar';
import { DataGrid } from '@mui/x-data-grid';
import { toast } from 'react-toastify';
import DepartmentApi from '../../../apis/departments/DepartmentApi';
import { DepartmentModelResponse } from '../../../models/responses/Departments/DepartmentModelResponse';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../reduxs/stores/store';
import { updateStatusDepByDepId } from '../../../reduxs/slices/general/departmentSlice';
import { UserMoreMenu } from '../../../sections/@dashboard/user';
import { filter } from 'lodash';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../routes/path';

const dataCol = [
    // {
    //     field: 'departmentId',
    //     headerName: 'Id',
    //     width: 230,
    //     editable: true,
    // },
    {
        field: 'departmentName',
        headerName: 'Department Name',
        width: 230,
        editable: true,
    },
    // {
    //     field: 'schoolId',
    //     headerName: 'School Id',
    //     width: 230,
    //     editable: true,
    // },
    {
        field: 'school',
        headerName: 'School Name',
        width: 230,
        editable: true,
        //cach thuc lay field du lieu trong object long api mui-data-grid
        valueFormatter: ({ value }: any) => value.schoolName,
    },
    {
        field: 'isDisable',
        headerName: 'Status',
        width: 160,

    }
];

function descendingComparator(a: any, b: any, orderBy: any) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order: any, orderBy: any) {
    return order === 'desc'
        ? (a: any, b: any) => descendingComparator(a, b, orderBy)
        : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array: DepartmentModelResponse[], comparator: any, query: any) {
    const stabilizedThis = array.map((el: any, index: any) => [el, index]);
    stabilizedThis.sort((a: any, b: any) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_user) => Object.values(_user)
            .join("")
            .toLowerCase()
            .includes(query.toLowerCase()));
    }
    console.log(stabilizedThis.length);
    
    return stabilizedThis.map((el: any) => el[0]);
}


const AdDepartmentPage = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [order, setOrder] = useState('asc');

    const [selected, setSelected] = useState<any>([]);

    const [orderBy, setOrderBy] = useState('departmentName');

    const [pageSize, setPageSize] = useState<number>(5);

    const [departments, setDepartments] = useState<Array<DepartmentModelResponse>>([]);

    const [filterName, setFilterName] = useState('');

    const handleFilterByName = (event: any) => {
        setFilterName(event.target.value);
    };

    let listDepData: DepartmentModelResponse[];


    const tokenLogin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnbWFpbCI6Im5nb2NwaHVjZG8yNjAxQGdtYWlsLmNvbSIsImZ1bGxOYW1lIjoiRG8gTmdvYyBQaHVjIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJqdGkiOiJkN2MwODg2YS1hMjQ4LTQ1ZTEtODg5ZS1jNGIzYmVhMjgzMmYiLCJleHAiOjE2NTcyODIxMjEsImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.S2piRs1-O7foPYXlcLJba6SnkexEwZYc37hYo0RX2yc";

    useEffect(() => {
        const adminGetAllDeps = () => {
            const loadDataNotifiy = toast.loading("...LOADING")
            DepartmentApi.getAllDepartments(tokenLogin)
                .then((res) => {
                    if (res.status === 200) {
                        toast.update(loadDataNotifiy, {
                            render: "Load Data Successfully...",
                            autoClose: 3000,
                            type: 'success',
                            closeOnClick: true,
                            isLoading: false,
                            // onClose: () => {

                            // }
                        })
                        setDepartments(res.data);
                        listDepData = res.data;
                    }

                })
                .catch(function (error) {
                    if (error.response.status === 401) {
                        //Lỗi 401: người dùng ko có quyền truy cập (do token sai, hoặc token hết hạn,..)
                        toast.warning('UserName does not have permission!');
                    } else {
                        toast.warning('Your system is slow. Try Again!');
                    }
                });
        };

        // adminGetAllDeps();
    }, []);

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: (params: any) => {
                return (
                    <>
                        {/* <div className="cellAction">
                            <Link to={`/admin/departments/${params.id}`} style={{ textDecoration: 'none' }}>
                                <div className="viewButton">View</div>
                            </Link>
                            <div className="deleteButton" onClick={() => handleBan(params.id)}>
                                Ban
                            </div>
                        </div> */}
                        <div style={{ alignItems: 'center' }}>
                            <UserMoreMenu />
                        </div>
                    </>
                );
            },
        },
    ];

    const handleBan = (id: any) => {

        const updateDepSta = {
            id: id,
            status: false,
        }
        const loadDataNotifiy = toast.loading("...LOADING")
        dispatch(updateStatusDepByDepId(updateDepSta)).then(() => {
            const pos = departments.findIndex(x => x.departmentId === id);
            let newData = [...departments];
            newData[pos].isDisable = !newData[pos].isDisable as boolean;
            toast.update(loadDataNotifiy, {
                render: "Update Successfully...",
                autoClose: 3000,
                type: 'success',
                isLoading: false,
                // onClose: () => {

                // }
            })
            setDepartments(newData)
        }).catch((err: any) => {
            if (err.response.status === 401) {
                //Lỗi 401: người dùng ko có quyền truy cập (do token sai, hoặc token hết hạn,..)
                toast.update(loadDataNotifiy, {
                    render: "UserName does not have permission!",
                    autoClose: 3000,
                    type: 'error',
                    closeOnClick: true,
                    isLoading: false,
                    // onClose: () => {

                    // }
                })
            } else {
                toast.update(loadDataNotifiy, {
                    render: "Your system is slow. Try Again!",
                    autoClose: 3000,
                    type: 'warning',
                    closeOnClick: true,
                    isLoading: false,
                    // onClose: () => {

                    // }
                })
            }
        })
    };

    const onPageSizeChanging = (newPageSize: number) => {
        setPageSize(newPageSize);

    }

    const filteredDepartment = applySortFilter(departments, getComparator(order, orderBy), filterName);

    return (
        <>
            <Page title="Department">
                <Container>
                <HeaderBreadcrumbs
          heading="Profile"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root +"/app" },
            { name: 'Department', href: PATH_DASHBOARD.root },
           
          ]}
        />
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                        <Typography variant="h4" gutterBottom>
                            Department
                        </Typography>
                        <Button variant="contained" component={RouterLink} to="/dashboard/products/new" startIcon={<Iconify icon="eva:plus-fill" />}>
                            New Department
                        </Button>
                    </Stack>
                </Container>

                <Card>
                    <AdDepartmentListToolBar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

                    <Scrollbar>
                        <>
                            {                               
                                filteredDepartment !== null ? (
                                    <>
                                        <DataGrid
                                            sx={{ minWidth: 800, minHeight: 600 }}
                                            rows={filteredDepartment}
                                            columns={dataCol.concat(actionColumn)}
                                            checkboxSelection
                                            //turn on pagination on datagird
                                            pageSize={pageSize}
                                            rowsPerPageOptions={[5, 10, 15]}
                                            onPageSizeChange={(newPageSize) => onPageSizeChanging(newPageSize)}
                                            getRowId={(row) => row.departmentId}
                                            pagination
                                        // disableSelectionOnClick

                                        />
                                    </>
                                ) : (
                                    <>
                                        <DataGrid
                                            sx={{ minWidth: 800, minHeight: 600 }}
                                            rows={departments}
                                            columns={dataCol.concat(actionColumn)}
                                            checkboxSelection
                                            //turn on pagination on datagird
                                            pageSize={pageSize}
                                            rowsPerPageOptions={[5, 10, 15]}
                                            onPageSizeChange={(newPageSize) => onPageSizeChanging(newPageSize)}
                                            getRowId={(row) => row.departmentId}
                                            pagination
                                        // disableSelectionOnClick

                                        />
                                    </>
                                )
                            }

                        </>
                    </Scrollbar>
                </Card>
            </Page>
            
        </>
    )
}

export default AdDepartmentPage