using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        IPaymentService _paymentService;

        public PaymentController(IPaymentService paymentService)
        {
            _paymentService = paymentService;
        }


        [HttpGet("list")]
     
        public IActionResult Get()
        {
            var result = _paymentService.GetAll();

            if (result.Success) return Ok(result);
            return BadRequest(result);
        }
        
        [HttpPost("addpayment")]     
        public IActionResult AddPayment(Payment payment)
        {
            var result = _paymentService.Add(payment);

            if (result.Success) return Ok(result);
            return BadRequest(result);
        }

    }
}

