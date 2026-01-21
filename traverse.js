data = {
  "properties": [
    {
      "id": "P001",
      "name": "Sunset Villas",
      "location": {
        "city": "Nairobi",
        "county": "Nairobi County",
        "coordinates": { "lat": -1.2921, "lng": 36.8219 }
      },
      "units": [
        { "unitId": "U001", "type": "1BHK", "rent": 15000, "occupied": true, "tenant": { "name": "Alice", "moveIn": "2025-01-15" } },
        { "unitId": "U002", "type": "2BHK", "rent": 25000, "occupied": false, "tenant": null }
      ],
      "amenities": ["Pool", "Gym", "Parking"],
      "maintenance": [
        { "date": "2025-01-05", "task": "AC repair", "cost": 5000 },
        { "date": "2025-01-20", "task": "Garden landscaping", "cost": 3000 }
      ],
      "manager": { "name": "John Doe", "contact": "+254700000001" },
      "status": "active",
      "valuation": { "currentValue": 15000000, "lastValuationDate": "2024-12-31" }
    },
    {
      "id": "P002",
      "name": "Riverside Apartments",
      "location": {
        "city": "Nakuru",
        "county": "Nakuru County",
        "coordinates": { "lat": -0.3031, "lng": 36.0800 }
      },
      "units": [
        { "unitId": "U003", "type": "Studio", "rent": 12000, "occupied": true, "tenant": { "name": "Bob", "moveIn": "2025-02-01" } },
        { "unitId": "U004", "type": "2BHK", "rent": 22000, "occupied": true, "tenant": { "name": "Carol", "moveIn": "2025-02-10" } }
      ],
      "amenities": ["Security", "Parking"],
      "maintenance": [],
      "manager": { "name": "Mary Smith", "contact": "+254700000002" },
      "status": "active",
      "valuation": { "currentValue": 10000000, "lastValuationDate": "2024-11-30" }
    },
    {
      "id": "P003",
      "name": "Hilltop Residency",
      "location": {
        "city": "Mombasa",
        "county": "Mombasa County",
        "coordinates": { "lat": -4.0435, "lng": 39.6682 }
      },
      "units": [
        { "unitId": "U005", "type": "3BHK", "rent": 30000, "occupied": false, "tenant": null },
        { "unitId": "U006", "type": "2BHK", "rent": 20000, "occupied": true, "tenant": { "name": "David", "moveIn": "2025-01-28" } }
      ],
      "amenities": ["Gym", "Balcony", "WiFi"],
      "maintenance": [
        { "date": "2025-01-12", "task": "Plumbing", "cost": 4500 }
      ],
      "manager": { "name": "James Mwangi", "contact": "+254700000003" },
      "status": "inactive",
      "valuation": { "currentValue": 12000000, "lastValuationDate": "2024-10-15" }
    },
    {
      "id": "P004",
      "name": "Coastline Towers",
      "location": {
        "city": "Mombasa",
        "county": "Mombasa County",
        "coordinates": { "lat": -4.0425, "lng": 39.6685 }
      },
      "units": [
        { "unitId": "U007", "type": "1BHK", "rent": 14000, "occupied": true, "tenant": { "name": "Eve", "moveIn": "2025-01-10" } },
        { "unitId": "U008", "type": "2BHK", "rent": 24000, "occupied": true, "tenant": { "name": "Frank", "moveIn": "2025-01-22" } }
      ],
      "amenities": ["Parking", "Elevator", "Security"],
      "maintenance": [],
      "manager": { "name": "Anne Njeri", "contact": "+254700000004" },
      "status": "active",
      "valuation": { "currentValue": 18000000, "lastValuationDate": "2024-12-01" }
    },
    {
      "id": "P005",
      "name": "Lakeview Condos",
      "location": {
        "city": "Naivasha",
        "county": "Nakuru County",
        "coordinates": { "lat": -0.7167, "lng": 36.4333 }
      },
      "units": [
        { "unitId": "U009", "type": "Studio", "rent": 10000, "occupied": false, "tenant": null },
        { "unitId": "U010", "type": "1BHK", "rent": 15000, "occupied": true, "tenant": { "name": "Grace", "moveIn": "2025-02-05" } }
      ],
      "amenities": ["Gym", "WiFi", "Pool"],
      "maintenance": [
        { "date": "2025-01-15", "task": "Roof repair", "cost": 6000 }
      ],
      "manager": { "name": "Peter Otieno", "contact": "+254700000005" },
      "status": "active",
      "valuation": { "currentValue": 9000000, "lastValuationDate": "2024-11-25" }
    }
  ]
}


// looping through propety names
for(let i=0; i < data.properties.length; i++){
    console.log(`Property: ${data.properties[i].name}`)
}

// for ... of
for(const property of data.properties){
  console.log(`Property ID: ${property.id}, Name: ${property.name}`)
}

// forEach()
data.properties.forEach(property => {
  console.log(`Manager: ${property.manager.name}, Contact: ${property.manager.contact} `)
});

// nested loops
data.properties.forEach(property => {
  console.log(`${property.name} Units`)
  property.units.forEach(unit=> {
    console.log(`- ${unit.type} | Rent: ${unit.rent} | Occupied: ${unit.occupied}`)
  })
})


// active properties
const activeProperties = data.properties.filter(p => p.status === 'active').map(p => {
  console.log(`Active Properties: ${p.name}`)
})

const totalValuation = data.properties.reduce((sum, p) => sum + p.valuation.currentValue,0)
console.log(`Total valuation: ${totalValuation}`);

